https://css-tricks.com/scroll-fix-content/

const axios = require('axios');

async function expiringPatents(patents) {
    let dataJSON =
        {
            "searchText": "",
            "fq": [],
            "fl": "*",
            "mm": "0%",
            "df": "patentTitle",
            "qf": "appEarlyPubNumber applId appLocation appType appStatus_txt appConfrNumber appCustNumber appGrpArtNumber appCls                   appSubCls appEntityStatus_txt patentNumber patentTitle inventorName firstNamedApplicant appExamName appExamPrefrdName                   appAttrDockNumber appPCTNumber appIntlPubNumber wipoEarlyPubNumber pctAppType firstInventorFile appClsSubCls rankAndInventorsList",
            "facet": "true",
            "sort": "applId asc",
            "start": "0"
        }
    // https://ped.uspto.gov/api/queries;
    await patents.forEach(async (patent) => {
        if (patent.includes('US')) {
            dataJSON.searchText = `patentNumber:(${patent})`;
        } else {
            dataJSON.searchText = `applId:(${patent})`;
        }

        try {
            let data = await axios.post('https://ped.uspto.gov/api/queries', dataJSON);
            // console.log('aici', data);
            console.log("App filing date", data.data.queryResults.searchResponse.response.docs[0].appFilingDate.split("T")[0]) // JSON data parsed by `data.json()` call
        } catch (err) {
            console.log(err);
        }
    })
}

expiringPatents(["US 4233942"]);
console.log("DONE");