(function( $, _, api, undefined ) {
	'use strict';

	api.controlConstructor['atcom-demo-image-list'] = api.Control.extend({
		ready: function() {
			var control = this;

			this.container.on( 'click', 'img', function() {
				var value,
					$image = $( this );

				try {
					value = JSON.parse( $image.data( 'value' ) );
				} catch ( e ) {
					value = $image.data( 'value' );
				}

				control.setting.set( value );
			});

			this.container.on( 'click', '.js-remove', function( e ) {
				e.preventDefault();

				control.setting.set( '' );
			});
		}
	});

})( jQuery, _, wp.customize );
