
var newobj = {
id:''
};
cursor = db.items.find();
while ( cursor.hasNext()) {
    newobj.id = cursor.next()._id;
   print(newobj);
}

// const newClientRisk = {
//     _id: '',
//     companyName: '',
//     boxFolderId: '',
//     riskScore: 0,
//     riskScoreDetails: []
// };
// cursor = db.kycapplications.find();
// while ( cursor.hasNext()) {
//    newClientRisk._id = cursor.next()._id;
//    newClientRisk.companyName = cursor.next().application.companyDetails.companyInformation.companyName;
//    newClientRisk.boxFolderId = cursor.next().boxFolder.id;
//    db.clientriskprofiles.insert(newClientRisk)
// }