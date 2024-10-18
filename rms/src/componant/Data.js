export const productData = [
  {
    productNumber: "1000010",
    npcCode: "125NNNN441",
    description: "0.45% SALINE BAG(ON-BOARD INSTRUMENT)",
    groupDespription: "Injectables",
    groupCode: "11000100",
    category: "Category A",
    typedescription: "Medicine",
    productType: "ZMED",
    uOM: "EA",
    count: "1"
  },
  {
    productNumber: "1000011",
    npcCode: "125NNNN440",
    description: "0.45% SALINE SOLUTION",
    groupDespription: "Injectables",
    groupCode: "11000110",
    category: "Category B",
    typedescription: "Medicine",
    productType: "DZME",
    uOM: "EA",
    count: "1"
  },
  {
    productNumber: "1000012",
    npcCode: "100ARCH001",
    description: "1 ML SYRINGE (4/PKG)",
    groupDespription: "Consumables",
    groupCode: "11000120",
    category: "Category C",
    typedescription: "Medicine",
    productType: "EDZM",
    uOM: "EA",
    count: "1"
  },
  {
    productNumber: "1000013",
    npcCode: "110CDYN009",
    description: "10ENZYMATIC CLEANER",
    groupDespription: "LAB Reagents",
    groupCode: "11000130",
    category: "Category D",
    typedescription: "Medicine",
    productType: "MEDZ",
    uOM: "EA",
    count: "1"
  },
  {
    productNumber: "1000014",
    npcCode: "115BENC001",
    description: "10X EZ PREP SOLUTION, 2L",
    groupDespription: "LAB Reagents",
    groupCode: "11000140",
    category: "Category E",
    typedescription: "Medicine",
    productType: "ZMED1",
    uOM: "EA",
    count: "1"
  },
  {
    productNumber: "1000015",
    npcCode: "400PLAT002",
    description: "12-WELL-PLATE",
    groupDespription: "MED Equip",
    groupCode: "11000150",
    category: "Category F",
    typedescription: "Medicine",
    productType: "ZMED2",
    uOM: "EA",
    count: "1"
  },
  {
    productNumber: "1000016",
    npcCode: "125NNNN442",
    description: "12X75 MM ROUND BOTTOM POLYSTYRENE TUBES",
    groupDespription: "LAB Consumables",
    groupCode: "11000160",
    category: "Category G",
    typedescription: "Medicine",
    productType: "ZMED3",
    uOM: "EA",
    count: "1"
  },
  {
    productNumber: "1000017",
    npcCode: "135NNNN002",
    description: "1-HEPTANESULFONIC ACID SODIUM SALT HPLC",
    groupDespription: "LAB Reagents",
    groupCode: "11000170",
    category: "Category H",
    typedescription: "Medicine",
    productType: "ZMED4",
    uOM: "EA",
    count: "1"
  },
  {
    productNumber: "1000018",
    npcCode: "135NNNN003",
    description: "1-HEXANESULFONIC ACID SODIUM SALT HPLC G",
    groupDespription: "LAB Reagents",
    groupCode: "11000180",
    category: "Category I",
    typedescription: "Medicine",
    productType: "ZMED5",
    uOM: "EA",
    count: "1"
  },
  {
    productNumber: "1000019",
    npcCode: "125NNNN276",
    description: "2 ML MICROCENTRIFUGE TUBES",
    groupDespription: "LAB Consumables",
    groupCode: "11000190",
    category: "Category J",
    typedescription: "Medicine",
    productType: "ZMED6",
    uOM: "EA",
    count: "1"
  }
];

export const quotationData = [
  {
    id: 1,
    orderNo: "1000000001",
    productNo: "1000010",
    count: 20,
    Amount: 200,
    quotationNo: "QTN-001",
    status: "Approved",
    date: "10/16/2024 5:18:31 PM"
  },
  {
    id: 2,
    orderNo: "1000000002",
    productNo: "1000011",
    count: 30,
    Amount: 250,
    quotationNo: "QTN-002",
    status: "Approved",
    date: "10/15/2024 5:18:31 PM"
  },
  {
    id: 3,
    orderNo: "1000000003",
    productNo: "1000012",
    count: 40,
    Amount: 100,
    quotationNo: "QTN-003",
    status: "Approved",
    date: "10/10/2024 5:18:31 PM"
  },
  {
    id: 4,
    orderNo: "1000000004",
    productNo: "1000013",
    count: 50,
    Amount: 600,
    quotationNo: "QTN-777",
    status: "Pending",
    date: "10/16/2024 5:18:31 PM"
  },
  {
    id: 5,
    orderNo: "1000000005",
    productNo: "1000014",
    count: 60,
    Amount: 500,
    quotationNo: "QTN-778",
    status: "Approved",
    date: "10/16/2024 5:18:31 PM"
  }
];

export const goodsReceiptData = [
  {
    quotationNo: "QTN-001",
    obdNo: "OBD0001",
    status: "Processing",
    deliveryDate: "05/18/2024",
    productNumber: "1000010",
    quantity: "10"
  },
  {
    quotationNo: "QTN-002",
    obdNo: "OBD0002",
    status: "Processing",
    deliveryDate: "06/18/2024",
    productNumber: "1000020",
    quantity: "20"
  },
  {
    quotationNo: "QTN-003",
    obdNo: "OBD0003",
    status: "Processing",
    deliveryDate: "07/18/2024",
    productNumber: "1000030",
    quantity: "30"
  },
  {
    quotationNo: "QTN-778",
    obdNo: "OBD0010",
    status: "Processing",
    deliveryDate: "08/18/2024",
    productNumber: "1000040",
    quantity: "40"
  }
];

export const invoicesDetails = [
  // Dummy data structure for invoices
  {
    invoiceNo: "INV-001",
    obdNo: "OBD0001",
    quotationNo: "QTN-001",
    status: "Pending",
    quantity:"100",
    Amount: 500
  },
  {
    invoiceNo: "INV-002",
    obdNo: "OBD0002",
    quotationNo: "QTN-002",
    status: "Accepted",
    quantity:"100",
    Amount: 500
  },
  {
    invoiceNo: "INV-003",
    obdNo: "OBD0003",
    quotationNo: "QTN-003",
    status: "Progressing",
    quantity:"100",
    Amount: 500
  }
];
