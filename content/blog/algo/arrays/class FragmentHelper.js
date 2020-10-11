class FragmentHelper {

    fragmentToObject () {
        const currentHash = this.getHashFromURL();
        if ( !currentHash ) {
            return null;
        }

        const url = this.processHashUrl( currentHash );
        const oldHash = this.getOldHash( url );

        const urlNoHash = this.removeOldHash( url );

        const imsResponseAsMap = this.getQueryParamsAsMap( urlNoHash );

        if( oldHash ) {
            imsResponseAsMap['old_hash'] = oldHash;
        }
        
        return imsResponseAsMap;
    }

    /**
     * function used to determine the old_hash value contained into the source
     * @param source {String} represents the input source used to determine the old_hash
     * @returns {String}
     */
    getOldHash ( source ) {
        if( !source ) {
            return '';
        }
        const match = source.match( 'old_hash=(.*?)&from_ims=true' );
        if( !match ) {
            return '';
        }
        return match[1];
    }

    /**
     * remove the old hash value from the input string
     * @param source {String} represents the input source
     */
    removeOldHash ( source ) {
        if( !source ) {
            return source;
        }
        return source.replace( /old_hash=(.*?)&from_ims=true/gi, 'from_ims=true' );
    }

    /**
   * Gets the hash from an url.
   * @param {string=} url The URL from which to get the hash.
   *                      If missing use the current page's URL.
   * @Note: the # is not returned from url
   * @returns {string}
   */
    getHashFromURL ( url ){
        url = url || window.location.href;
        const index = url.indexOf( "#" );
        return index !== -1 ? url.substring( index + 1 ) : "";
    }

    /**
   * Parses a query string to a JSON.
   * @NOTE Sometimes, the query string is actually a hash, due to inconsistent servers
   * @param source {String}; represents the inpt strring value wich will be transformed to object
   * @returns {!Object}
   */
    getQueryParamsAsMap ( source ) {
        if ( !source ) {
            return {};
        }
        const paramMap = {};

        //in case the source starts with #, ? or &, the first character is removed. 
        source = source.replace( /^(#\/|\/|#|\?|&)/, "" );
    
        source.split( "&" ).forEach( keyValuePair => {
            if ( keyValuePair.length ) {
                const arr = keyValuePair.split( "=" );
                paramMap[ arr[ 0 ] ] = decodeURIComponent( arr[ 1 ] );
            }
        } );
        return paramMap;
    }

    /**
   * @param source {string} represent the input source wich will be processed 
   * The backend appends a second "#" sign to redirect_uri, even if it already contains one.
   * @see https://jira.corp.adobe.com/browse/IMSB-4107554
   */
     processHashUrl ( source ) {
        return decodeURIComponent( source )
            .replace( "?error", "#error" )
            .replace( '#', '&' )
            .replace('from_ims=true?','from_ims=true&');
    }
}