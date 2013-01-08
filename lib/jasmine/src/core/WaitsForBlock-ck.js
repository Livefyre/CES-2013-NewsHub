/**
 * A block which waits for some condition to become true, with timeout.
 *
 * @constructor
 * @extends jasmine.Block
 * @param {jasmine.Env} env The Jasmine environment.
 * @param {Number} timeout The maximum time in milliseconds to wait for the condition to become true.
 * @param {Function} latchFunction A function which returns true when the desired condition has been met.
 * @param {String} message The message to display if the desired condition hasn't been met within the given time period.
 * @param {jasmine.Spec} spec The Jasmine spec.
 */jasmine.WaitsForBlock=function(e,t,n,r,i){this.timeout=t||e.defaultTimeoutInterval;this.latchFunction=n;this.message=r;this.totalTimeSpentWaitingForLatch=0;jasmine.Block.call(this,e,null,i)};jasmine.util.inherit(jasmine.WaitsForBlock,jasmine.Block);jasmine.WaitsForBlock.TIMEOUT_INCREMENT=10;jasmine.WaitsForBlock.prototype.execute=function(e){jasmine.VERBOSE&&this.env.reporter.log(">> Jasmine waiting for "+(this.message||"something to happen"));var t;try{t=this.latchFunction.apply(this.spec)}catch(n){this.spec.fail(n);e();return}if(t)e();else if(this.totalTimeSpentWaitingForLatch>=this.timeout){var r="timed out after "+this.timeout+" msec waiting for "+(this.message||"something to happen");this.spec.fail({name:"timeout",message:r});this.abort=!0;e()}else{this.totalTimeSpentWaitingForLatch+=jasmine.WaitsForBlock.TIMEOUT_INCREMENT;var i=this;this.env.setTimeout(function(){i.execute(e)},jasmine.WaitsForBlock.TIMEOUT_INCREMENT)}};