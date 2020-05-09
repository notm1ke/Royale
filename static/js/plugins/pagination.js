/**
 * Paginate - jQuery Plugin
 * By Federico Cargnelutti <fedecarg@gmail.com>
 *
 * Modified by Argon Development:
 * We added post-jQuery 1.7 deprecation fixes,
 * page display, and more. Original credits are
 * retained by Federico Cargnelutti above.
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   - http://www.opensource.org/licenses/mit-license.php
 *   - http://www.gnu.org/licenses/gpl.html
 * 
 * The original repository can be found at:
 *   - http://github.com/fedecarg/jquery-htmlpaginate
 * 
 */
(function($) {
    
$.fn.paginate = function(selector, options) {
    
    let Paginator = function(self, selector, options) {
        
        let defaults = {
            itemsPerPage: 5,
            selector: {
                next: selector + '-next',
                previous: selector + '-previous',
                pagination: selector + '-pagination',
                display: selector + '-display',
            },
        };
        options = $.extend(defaults, options);

        let currentPage = 1;
        let numberOfPages = 1;
        let numberOfItems = 0;
        
        let init = function() {
            numberOfItems = self.children().length;
            numberOfPages = Math.ceil(numberOfItems / options.itemsPerPage);
            if (numberOfPages > 1) {
                $(options.selector.pagination).show();
                $(options.selector.previous).attr('disabled', true);
            }
            
            self.children().hide();
            self.children().slice(0, options.itemsPerPage).show();
            
            $(options.selector.previous).click(function(e){
                e.preventDefault();
                previous();
            });
            $(options.selector.next).click(function(e){
                e.preventDefault();
                next();
            });

            $(options.selector.display).text('page ' + currentPage + '/' + numberOfPages);
            self.show();
        }
        
        let show = function(page) {
            currentPage = page;
            startPage = (currentPage - 1) * options.itemsPerPage;
            endPage = startPage + options.itemsPerPage;
            self.children().hide().slice(startPage, endPage).show();

            $(options.selector.pagination + ' a').attr('disabled', false);
            if (currentPage <= 1) {
                $(options.selector.previous).attr('disabled', true);
            } else if (currentPage === numberOfPages) {
                $(options.selector.next).attr('disabled', true);
            }
            $(options.selector.display).text('page ' + currentPage + '/' + numberOfPages);
        };
        
        let next = function() {
            if (currentPage < numberOfPages){
                show(currentPage + 1);
            }
        };
        
        let previous = function() {
            if (currentPage > 1) {
                show(currentPage - 1);
            }
        };
        
        init();
        return this;
    }
    
    return new Paginator(this, selector, options);
};
})(jQuery);