/**
 * @file
 *
 * Defines a zoom view adapter with no animations.
 *
 * @module peaks/views/zooms/static
 */
define([], function() {
  'use strict';

  return {
    create: function(currentScale, previousScale, view) {
      return {
        start: function() {
          view.data = view.waveformData.resample({
            scale: currentScale
          });

          view.segmentLayer.draw();
          view.pointLayer.draw();

          view.seekFrame(view.data.at_time(view.peaks.time.getCurrentTime()));
        }
      };
    }
  };
});
