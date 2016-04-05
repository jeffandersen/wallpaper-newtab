function Wallpaper() {
  /**
   * Set this url to where the wallpapers are hosted
   */
  this.location = 'https://s3.amazonaws.com/wallpaper.extension/';
  /**
   * The default image is saved in the extension files
   */
  this.defaultImage = 'images/small';
  /**
   * The img tag found in newtab.html
   */
  this.img = $("img");

  /**
   * We try the remote image for the current and previous month
   * before defaulting to the local image file
   */
  var self = this;
  // Wait to see if setting this month's image fails
  this.img.error(function() {
    if (self._fallback && self._fallback > 0) {
      // Just set to the default image, found on disk
      return self.load(self.defaultImage, true);
    } 
    // Load the remote file for the previous month
    self.load(self.previousMonth());
    self._fallback = 1;
  });
}

/**
 * Load the specifed path in the img tag
 *
 * @param {string} wanted - YYYY/MM
 * @param {boolean} localFile - Is the file saved with the extension
 */
Wallpaper.prototype.load = function(wanted, localFile) {
  var location = localFile? '' : this.location;
  var url = location + wanted + '.png';
  this.img.attr('src', url);

  // Force small images to fill the width
  var width = this.img.width();
  if (width < $(window).width()) {
    this.img.width($(window).width());
  }
};

/**
 * Determine the current month's YYYY/MM
 */
Wallpaper.prototype.currentMonth = function() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  return year + '/' + month;
};

/**
 * Determine the previous month's YYYY/MM
 */
Wallpaper.prototype.previousMonth = function() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  if (month === 0) {
    month = 11;
  }
  return year + '/' + month;
};

/**
 * Rock and roll
 */
$(document).ready(function() {
  var wp = new Wallpaper();
  wp.load(wp.currentMonth());
});
