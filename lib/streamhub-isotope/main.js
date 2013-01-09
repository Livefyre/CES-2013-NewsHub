define(function(require) {
var Backbone = require('backbone'),
	Mustache = require('mustache'),
	isotope = require('isotope'),
	ContentTemplate = require('text!streamhub-backbone/templates/Content.html'),
	ContentView = require('streamhub-backbone/views/ContentView'),
	sources = require('streamhub-backbone/const/sources'),
    _ = require('underscore');

var MasonryView = Backbone.View.extend({
	tagName: "div",
	className: "hub-IsotopeView",
	events: {
		'all': function () { console.log('MasonryView event', arguments); }
	},
	initialize: function (opts) {
		this._contentViewOpts = opts.contentViewOptions || {};
		this._sourceOpts = opts.sources || {};
        this._isotopeOpts = opts.isotope || {};
        this.$el.addClass(this.className);
        this.$el.hide();
        if (this.collection._started) {
        }
		this.collection.on('add', this._addItem, this);
	},
	render: function () {
		var self = this;
		this.collection.forEach(function(item) {
			self._insertItem(item, {})
            if (this.collection.indexOf(item) == this.collection.length-1) {
                this.$el.imagesLoaded(function () {
                   self.$el.isotope('reLayout'); 
                });
            }
		});
	}
});

MasonryView.prototype._insertItem = function (item, opts) {
	var self = this,
	    newItem = $(document.createElement('div')),
		json = item.toJSON();

	if ( ! json.author) {
        // TODO: These may be deletes... handle them.
        console.log("DefaultView: No author for Content, skipping");
        return;
    }

	// Annotate for source filtering
	newItem.attr('data-hub-source-id', item.get('sourceId'));

	function _getContentViewOpts (content) {
		var opts = {},
			configuredOpts = _(opts).extend(self._contentViewOpts),
			perSourceOpts;
		if (content.get('source')==sources.TWITTER) {
			return _(configuredOpts).extend(self._sourceOpts['twitter']||{});
		}
		if (content.get('source')==sources.RSS) {
			return _(configuredOpts).extend(self._sourceOpts['rss']||{});
		}
		return configuredOpts;
	}

	var cv = new ContentView(_.extend({
		model: item,
		el: newItem
	}, _getContentViewOpts(item)));

	newItem
	  .addClass('hub-item')
	  .attr('data-hub-contentId', json.id)

	this.$el.append(newItem);
	return newItem;
}
MasonryView.prototype._addItem = function(item, opts) {
    console.warn('view - _addItem');
    console.warn('started: ', this.collection._started);
	var $newItem = this._insertItem(item, opts);
    if (!$newItem) {
        console.log("DefaultView: Could not create a hub item element to add to container");
        return;
    }
    if (this.collection._initialized) {
        this.$el.fadeIn();
        this.$el.isotope(_({
            itemSelector: '.hub-item',
            isAnimated: true,
        }).extend(this._isotopeOpts));
        this.render();
    } else if (this.collection._initialized && this.collection._started) {
	    var that = this;
		$newItem.imagesLoaded(function () {
	        that.$el.isotope('insert', $newItem, true);
	    });
    }
};

MasonryView.prototype.go = function () {

}

return MasonryView;
});
