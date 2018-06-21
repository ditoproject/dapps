module.exports = {
    add: async function (barcode, barcodedark, rfidid) {

        try {
         
          
            app.sdb.lock('codedata.add@' + barcode)

            if (barcode != "") {
                let exists = await app.model.Codedata.exists({ barcode: barcode })
                if (exists) return '-1'
            }
            if (rfidid != "")
            {
                let exists = await app.model.Codedata.exists({ rfidid: rfidid })
                if (exists) return '-2'
            }                                    
          
       

            app.sdb.create('Codedata', {
                barcode: barcode,
                barcodedark: barcodedark,
                rfidid: rfidid,
                timestamp: this.trs.timestamp
            })
         
          
        }
        catch (e) {
            app.logger.info("barcodeError:" + e.toString());
            return "-3";
        }


    }
}
