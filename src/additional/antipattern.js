/**
 * Return true if the field value not matches the given format RegExp
 *
 * @example $.validator.methods.antipattern("AR1004",element,/^AR\d{4}$/)
 * @result false
 *
 * @example $.validator.methods.antipattern("BR1004",element,/^AR\d{4}$/)
 * @result true
 *
 * @name $.validator.methods.antipattern
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "antipattern", function( value, element, param ) {
    if ( this.optional( element ) ) {
        return true;
    }
    if ( typeof param === "string" ) {
        param = new RegExp( "^(?:" + param + ")$" );
    }
    return value.match( param ) === null;
}, "Invalid format." );
