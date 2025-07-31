var payload={
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
}


var thisisit= payload.feed.entry;
console.log(thisisit);

var Formpayload={
    "Identifier": 
}