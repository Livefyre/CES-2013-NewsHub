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

        this.collection.on('add', this._addItem, this);
        this.collection.on('initialDataLoaded', this.render, this);
	},
	render: function () {
        this.$el.fadeIn();
        this.$el.prev('.loading-indicator').hide();
        this.$el.isotope(_({
            itemSelector: '.hub-item',
            isAnimated: true,
            getSortData : {
                index : function( $item ) {
                    return $item.index();
                }
            },
            sortBy : 'index'
        }).extend(this._isotopeOpts));

		var self = this;
		this.collection.forEach(function(item) {
			self._insertItem(item, {})
            if (self.collection.indexOf(item) == self.collection.length-1) {
                self.$el.imagesLoaded(function () {
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

    if (this.collection._initialized) {
        this.$el.prepend(newItem);
    } else {
        this.$el.append(newItem);
    }
	return newItem;
}

MasonryView.prototype._addItem = function(item, opts) {
	var $newItem = this._insertItem(item, opts);
    if (!$newItem) {
        console.log("DefaultView: Could not create a hub item element to add to container");
        return;
    }
    if (this.collection._started && this.collection._initialized) {
	    var that = this;
		$newItem.imagesLoaded(function () {
            that.$el.isotope( 'addItems', $newItem )
            that.$el.isotope( 'updateSortData', that.$el.children() )
            that.$el.isotope();
	    });
    }
};

MasonryView.prototype.go = function () {

}

return MasonryView;
});
