import { JSEncrypt } from 'jsencrypt'
const key = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8P81WMvoiztYvf26zDZQhOsLDLuUapdl3xEyTHlnuMZXTnlkzeMmSk6HDkumbEHBU451xAD+OY3C5lQ/TaZZUWfpklINgOi2tW+caRO9RkiCAO46i+Y9+J97qNj27/Jz8/71gYZ0Qs+ucw/WMfNJXJvXFkqA8udyzlsyDLjkm4wIDAQAB-----END PUBLIC KEY-----"

export function setEncrypt( msg ){
    //console.log( msg )
    const jsencrypt = new JSEncrypt()
    jsencrypt.setPublicKey(key)
    var data = jsencrypt.encrypt(msg)
    console.log( 'data:'+ data)
    return data
}

export function decrypt( msg ){
    
}