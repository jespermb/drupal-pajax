/**
 * Created by jesperbisgaard on 21/01/2017.
 */
Drupal.behaviors.commerceAddToCart = {
    attach: function(context, settings) {
        $('#main-canvas-wrapper a').each(function() {
            if ($(this).attr('href') != '') {
                $(this).click(function(evt) {
                    evt.preventDefault();
                    Pajax.get(url, opts)
                        .then(res=>res.json()
                        .then(body=>{
                            body; // parsed json as javascript object
                            console.log(body);
                        }), res => {
                            // called on status or network errors
                            res.ok;    // false
                            res.error; // the error
                        });
                });
            }
        });
    }
}
