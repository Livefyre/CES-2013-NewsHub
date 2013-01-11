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

        this._$queue = $('<div id="queue" style="display: none;"></div>');
        this.$el.before(this._$queue);

        this.collection.on('add', this._insertItem, this);
        this.collection.on('initialDataLoaded', this.render, this);
	},
	render: function () {
        this.$el.siblings('.loading-indicator').hide();


        var $newItems = this._$queue.children();
        this.$el.append($newItems);
        this._$queue.empty();

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

        this.$el.isotope( 'addItems', $newItems );
        this.$el.fadeIn();

        var self = this;
        this.$el.imagesLoaded( function() {
            self.$el.isotope('reLayout');
        });

        // Ready to handle streamed content in the this._$queue
        this.go();
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

    this._$queue.append(newItem);

	return newItem;
}

MasonryView.prototype.go = function () {
    var frequency = 6000;
    var self = this;
    window.setInterval(function() {
        var $newItems = $('.hub-item:gt(2)', self._$queue);
        var $copy = $newItems.clone();
        self.$el.prepend($copy);
        self.$el.isotope( 'addItems', $copy );
        if (self.collection._started && self.collection._initialized) {
            $copy.imagesLoaded(function () {
                self.$el.isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
            });
        }
        $newItems.remove();
        if (this._$queue.children().length > 60) {
            $('.hub-item:lt(50)', self._$queue).remove();
        }
    }, frequency);
}

return MasonryView;
});
