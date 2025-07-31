
var message = {
    "feed": {
        "base": "http://sapeu1pas.prc.syngenta.org:8001/sap/opu/odata/sap/ZGW_EHS_TDG_INTERFACE_SRV_01/",
        "id": "http://sapeu1pas.prc.syngenta.org:8001/sap/opu/odata/sap/ZGW_EHS_TDG_INTERFACE_SRV_01/TReturnSet",
        "title": {
            "type": "text",
            "content": "TReturnSet"
        },
        "updated": "2025-07-23T13:07:06Z",
        "author": {
            "name": {}
        },
        "link": {
            "href": "TReturnSet",
            "rel": "self",
            "title": "TReturnSet"
        },
        "entry": [
            {
                "id": "http://sapeu1pas.prc.syngenta.org:8001/sap/opu/odata/sap/ZGW_EHS_TDG_INTERFACE_SRV_01/TReturnSet(Identifier='AFK3094',Recn='00000000000001138303')",
                "title": {
                    "type": "text",
                    "content": "TReturnSet(Identifier='AFK3094',Recn='00000000000001138303')"
                },
                "updated": "2025-07-23T13:07:06Z",
                "category": {
                    "term": "ZGW_EHS_TDG_INTERFACE_SRV_01.TReturn",
                    "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
                },
                "link": {
                    "href": "TReturnSet(Identifier='AFK3094',Recn='00000000000001138303')",
                    "rel": "self",
                    "title": "TReturn"
                },
                "content": {
                    "type": "application/xml",
                    "properties": {
                        "Identifier": "AFK3094",
                        "Version": 1.0,
                        "Language": "Portuguese_PT",
                        "Country": "Brazil",
                        "Gendate": 20250604,
                        "Rep_type": "MSDS",
                        "Recn": "00000000000001138303",
                        "Rvlid": "BR",
                        "Ids_nr": "I1102173275",
                        "Sbgvid": "SDS_BR",
                        "Doc_typ": "SDS",
                        "Changed_On": 20250604,
                        "Valid_from": {
                            "null": "true"
                        },
                        "Tradename": {},
                        "ZSHQNam": "21 UNIT SUMP EX 120915",
                        "PRODNam": "21 unit Sump AFK 2003092",
                        "ZCSNNum": {},
                        "Supplier": {},
                        "Status": "W7",
                        "Vname": {},
                        "Doc_id": "455A166FC6A21FD090A5C6304B070A90",
                        "Dappl": "pdf",
                        "MessageType": {},
                        "Message": {}
                    }
                }
            },
            {
                "id": "http://sapeu1pas.prc.syngenta.org:8001/sap/opu/odata/sap/ZGW_EHS_TDG_INTERFACE_SRV_01/TReturnSet(Identifier='AFK3094',Recn='00000000000001138385')",
                "title": {
                    "type": "text",
                    "content": "TReturnSet(Identifier='AFK3094',Recn='00000000000001138385')"
                },
                "updated": "2025-07-23T13:07:06Z",
                "category": {
                    "term": "ZGW_EHS_TDG_INTERFACE_SRV_01.TReturn",
                    "scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
                },
                "link": {
                    "href": "TReturnSet(Identifier='AFK3094',Recn='00000000000001138385')",
                    "rel": "self",
                    "title": "TReturn"
                },
                "content": {
                    "type": "application/xml",
                    "properties": {
                        "Identifier": "AFK3094",
                        "Version": 1.0,
                        "Language": "English",
                        "Country": "Global",
                        "Gendate": 20250609,
                        "Rep_type": "MSDS",
                        "Recn": "00000000000001138385",
                        "Rvlid": "ZG",
                        "Ids_nr": "I1102173275",
                        "Sbgvid": "SDS_GLOBAL",
                        "Doc_typ": "SDS",
                        "Changed_On": 20250609,
                        "Valid_from": {
                            "null": "true"
                        },
                        "Tradename": {},
                        "ZSHQNam": "21 UNIT SUMP EX 120915",
                        "PRODNam": "21 unit Sump AFK 2003092",
                        "ZCSNNum": {},
                        "Supplier": {},
                        "Status": "W7",
                        "Vname": {},
                        "Doc_id": "455A166FC6A21FE0919FACA6ACA10DB8",
                        "Dappl": "pdf",
                        "MessageType": {},
                        "Message": {}
                    }
                }
            }
        ]
    }
};

function safeNull(value) {
 if(value === null || value === undefined || value === "") return null;
 else {return value};

}
function formatDate(numericDate) {
  if (!numericDate) return null;
  
  // Convert to string to ensure we can manipulate it
  var dateStr = numericDate.toString();
  
  // Check if it's in the expected format (8 digits)
  if (dateStr.length !== 8) return dateStr;
  
  // Extract year, month, and day
  var year = dateStr.substring(0, 4);
  var month = dateStr.substring(4, 6);
  var day = dateStr.substring(6, 8);
  
  // Format as YYYY-MM-DD
  return year + "-" + month + "-" + day;

}

var successMap = {};
  var failedMap = {};
    var download = "http://sapeu1pas.prc.syngenta.org:8001/sap/opu/odata/sap/ZGW_EHS_TDG_INTERFACE_SRV_01/SDSPDFCollection(DocId='";


  message.feed.entry.forEach(function(entry) {
    var properties = entry.content.properties;
    var identifier = properties.Identifier;
    var msg = safeNull(properties.Message);

    var downloadUrl = download + identifier + "&Recordnumber=" + safeNull(properties.Recn);

    var title = safeNull(properties.Vname) ||
                safeNull(properties.Tradename) ||
                safeNull(properties.ZSHQNam) ||
                safeNull(properties.PRODNam) ||
                safeNull(properties.ZCSNNum) || null;

    var resultEntry = {
      DownloadCollection: (msg === 'Required real substance is missing') ? "" : downloadUrl,
      Identifier: safeNull(properties.Identifier),
      Version: safeNull(properties.Version),
      Language: safeNull(properties.Language),
      Country: safeNull(properties.Country),
      Rep_type: safeNull(properties.Rep_type),
      Recn: safeNull(properties.Recn),
      Rvlid: safeNull(properties.Rvlid),
      Ids_nr: safeNull(properties.Ids_nr),
      Sbgvid: safeNull(properties.Sbgvid),
      Doc_typ: safeNull(properties.Doc_typ),
      Supplier: safeNull(properties.Supplier),
      Status: safeNull(properties.Status),
      Doc_id: safeNull(properties.Doc_id),
      Dappl: safeNull(properties.Dappl),
      MessageType: safeNull(properties.MessageType),
      Message: msg,
      Valid_from: properties.Valid_from.null === "true" ? null : safeNull(properties.Valid_from),
      Changed_On: formatDate(safeNull(properties.Changed_On)),
      Gendate: formatDate(safeNull(properties.Gendate)),
      Title: title
    };

    if (msg === 'Required real substance is missing') {
      if (!failedMap[identifier]) {
        failedMap[identifier] = [];
      }
      failedMap[identifier].push(resultEntry);
    } else {
      if (!successMap[identifier]) {
        successMap[identifier] = [];
      }
      successMap[identifier].push(resultEntry);
    }
  });

  var successRecords = Object.entries(successMap).map(([id, results]) => ({ Identifier: id, Result: results }));
  var failedRecords = Object.entries(failedMap).map(([id, results]) => ({ Identifier: id, Result: results }));

  var result = {
    Success_Records: successRecords,
    Failed_Records: failedRecords
  };

  console.log(result);
  document.getElementById("json-file").innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;