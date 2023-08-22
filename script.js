// all right reserved by @Tushar292004 
$(document).ready(function() {
  var blockOptions = [
    "BLOCK 1",
    "BLOCK 2",
    "BLOCK 3",
    "BLOCK 4",
    "BLOCK 5",
    "BLOCK 6",
    "BLOCK 7",
    "BLOCK 8",
    "BLOCK 9",
    "BLOCK 10",
    "BLOCK 14",
    "BLOCK 15",
    "BLOCK 16",
    "BLOCK 18",
    "Data Science Lab",
    "Science & Humanity Department",
    "Physics Laboratory",
    "Chemistry Laboratory",
    "Girl's Mess Main",
    "Book Store",
    "Security Gate",
    "IT Staff Room",
    "CISCO LAB",
    "EEE Department",
    "ECE Department",
    "Department Of Automobile Engineering",
    "Department Of Biomedical Engineering",
    "Robotics Lab",
    "Department Of VISCOM",
    "Department Of Mechanical And Production",
    "Department Of Civil Engineering",
    "Department Of Bio-Tech",
    "IT Tower Lab",
    "Department Of Chemical Engineering",
    "Open Auditorium",
    "Remibai Jeppiar Auditorium",
    "Department Of Aeronautics Engineering",
    "Placement Office",
    "Central Library",
    "Church In College",
    "Department Of Mechatronix",
    "International Research Center",
    "Administration Block",
    "Academy Of Sciences",
    "Jeppiar Memorial",
    "Boys Mess Main",
    "Boys Veg Main",
    "Canteen",
    "Department Of IT",
    "Department Of MBA",
    "Fuel Station SIST",
    "Cricket Ground",
    "IOB ATM",
    "GOPALAKRISHNA ILLAM BOYS HOSTEL",
    "MGR ILLAM BOYS HOSTEL",
    "OPEN GROUND",
    "BASKETBALL COURT",
    "Department Of Architechture",
    "IN-DOOR BADMINTON STADIUM",
    "30 YEARS OF EXCELLENCE CIRCLE",
    "CENTRE FOR DRUG AND RECOVERY",
    "BUSINESS INCUBATOR SIST",
    "ST PAULS BLOCK",
    "SATHYABAMA HOSPITAL",
    "DENTAL BLOCK SIST",
    "BOYS MESS SCAS",
    "GIRLS MESS SCAS",
    "ST ANTHONY ILLAM",
    "SATHYABAMA CENTRE FOR ADVANCED STUDIES",
    "SIST MAIN GATE",
    "SIST 2ND GATE",
  ];

  // Coordinates data for each block
  var blockCoordinates = {
    "BLOCK 1": {
      latitude: 12.874099735258431,
      longitude: 80.22123254181328,
    },
    "BLOCK 2": {
      latitude: 12.872659563941205,
      longitude: 80.22091415299522,
    },
    "BLOCK 3": {
      latitude: 12.872701024685092,
      longitude: 80.22060894042465,
    },
    "BLOCK 4": {
      latitude: 12.872737607688705,
      longitude: 80.22036126792887,
    },
    "BLOCK 5": {
      latitude: 12.87280955424832,
      longitude: 80.2200635605997,
    },
    "BLOCK 6": {
      latitude: 12.872896133978566,
      longitude: 80.2197833654755,
    },
    "BLOCK 7": {
      latitude: 12.872894914548073,
      longitude: 80.21948190552334,
    },
    "BLOCK 8": {
      latitude: 12.872822968014935,
      longitude: 80.2193192922683,
    },
    "BLOCK 9": {
      latitude: 12.87291076717136,
      longitude: 80.21927801351923,
    },
    "BLOCK 10": {
      latitude: 12.873703581940518,
      longitude: 80.22035708852822,
    },
    "BLOCK 14": {
      latitude: 12.874229841355671,
      longitude: 80.22157972047223, 
    },
    "BLOCK 15": {
      latitude: 12.874710255574552, 
      longitude: 80.22133546722836,     
    },
    "BLOCK 16": {
      latitude: 12.874459427561927, 
      longitude: 80.22127023655226,   
    },
    "BLOCK 18": {
      latitude: 12.874791085220062, 
      longitude:  80.22179936665552,     
    },
    "Data Science Lab": {
      latitude: 12.875009754138773,
      longitude: 80.2214006211087,
    },
    "Science & Humanity Department": {
      latitude: 12.875148399391858,
      longitude: 80.22158421541582,
    },
    "Physics Laboratory": {
      latitude: 12.875410564735047,
      longitude: 80.2215299128744,
    },
    "Chemistry Laboratory": {
      latitude: 12.875090420480841,
      longitude: 80.22203156492374,
    },
    "Girl's Mess Main": {
      latitude: 12.875143357747959,
      longitude: 80.2216643763103,
    },
    "Book Store": {
      latitude: 12.874674484410523,
      longitude: 80.22038438785822,
    },
    "Security Gate": {
      latitude: 12.873500940826661,
      longitude: 80.22229658080218,
    },
    "IT Staff Room": {
      latitude: 12.874125241691395,
      longitude: 80.22114738285138,
    },
    "CISCO LAB": {
      latitude: 12.87403381775634,
      longitude: 80.22116822316441,
    },
    "EEE Department": {
      latitude: 12.873879993282426,
      longitude: 80.22093897972115,
    },
    "ECE Department": {
      latitude: 12.873671024034586,
      longitude: 80.2208526412815,
    },
    "Department Of Automobile Engineering": {
      latitude: 12.874953134313571,
      longitude: 80.22014719706938,
    },
    "Department Of Biomedical Engineering": {
      latitude: 12.874727525962136,
      longitude: 80.22014193737324,
    },
    "Robotics Lab": {
      latitude: 12.87508388451522,
      longitude: 80.22002096436205,
    },
    "Department Of VISCOM": {
      latitude: 12.875258218016505,
      longitude: 80.21968434382639,
    },
    "Department Of Mechanical And Production": {
      latitude: 12.873981998776284,
      longitude: 80.22037022962911,
    },
    "Department Of Civil Engineering": {
      latitude: 12.874411540358581,
      longitude: 80.22041935777101,
    },
    "Department Of Bio-Tech": {
      latitude: 12.87449086329448,
      longitude: 80.220136870969,
    },
    "IT Tower Lab": {
      latitude: 12.87384537219599,
      longitude: 80.21987718988773,
    },
    "Department Of Chemical Engineering": {
      latitude: 12.874125669004451,
      longitude: 80.2192078706193,
    },
    "Open Auditorium": {
      latitude: 12.874481783349612,
      longitude: 80.21896512453965,
    },
    "Remibai Jeppiar Auditorium": {
      latitude: 12.874396775455113,
      longitude: 80.2187270919761,
    },
    "Department Of Aeronautics Engineering": {
      latitude: 12.874523138532721,
      longitude: 80.21833351340116,
    },
    "Placement Office": {
      latitude: 12.87380046812792,
      longitude: 80.21913594183148,
    },
    "Central Library": {
      latitude: 12.873497881766749,
      longitude: 80.2188548936529,
    },
    "Church In College": {
      latitude: 12.87404835603964,
      longitude: 80.21871523169885,
    },
    "Department Of Mechatronix": {
      latitude: 12.873221428479887,
      longitude: 80.2191701587265,
    },
    "International Research Center": {
      latitude: 12.87264559102071,
      longitude: 80.22116779837471,
    },
    "Administration Block": {
      latitude: 12.873108695017175,
      longitude: 80.22188874656037,
    },
    "Academy Of Sciences": {
      latitude: 12.872956143206048,
      longitude: 80.22095542599541,
    },
    "Jeppiar Memorial": {
      latitude: 12.873299518642561,
      longitude: 80.22131347346577,
    },
    "Boys Mess Main": {
      latitude: 12.872771503052524,
      longitude: 80.21850285896448,
    },
    "Boys Veg Main": {
      latitude: 12.871918826865585,
      longitude: 80.21791731431503,
    },
    Canteen: {
      latitude: 12.872439708893376,
      longitude: 80.21943241120937,
    },
    "Department Of IT": {
      latitude: 12.872924913101599,
      longitude: 80.21769041575376,
    },
    "Department Of MBA": {
      latitude: 12.871947368368016,
      longitude: 80.21820276734803,
    },
    "Fuel Station SIST": {
      latitude: 12.873745476901798,
      longitude: 80.21610212582105,
    },
    "Cricket Ground": {
      latitude: 12.872792909115322,
      longitude: 80.21660349846483,
    },
    "IOB ATM": {
      latitude: 12.87369552962545,
      longitude: 80.22034000543971,
    },
    "GOPALAKRISHNA ILLAM BOYS HOSTEL": {
      latitude: 12.871822499239077,
      longitude: 80.21963003250231,
    },
    "MGR ILLAM BOYS HOSTEL": {
      latitude: 12.871326589811083,
      longitude: 80.21958245699598,
    },
    "OPEN GROUND": {
      latitude: 12.872164997264214,
      longitude: 80.2205705636662,
    },
    "BASKETBALL COURT": {
      latitude: 12.87141221451788,
      longitude: 80.22013506479327,
    },
    "Department Of Architechture": {
      latitude: 12.870680835763773,
      longitude: 80.22016434202794,
    },
    "IN-DOOR BADMINTON STADIUM": {
      latitude: 12.871201720367486,
      longitude: 80.2206474163754,
    },
    "30 YEARS OF EXCELLENCE CIRCLE": {
      latitude: 12.872307704636357,
      longitude: 80.22137934718685,
    },
    "CENTRE FOR DRUG AND RECOVERY": {
      latitude: 12.871323022099604,
      longitude: 80.22205272356727,
    },
    "BUSINESS INCUBATOR SIST": {
      latitude: 12.871415782212386,
      longitude: 80.2224296679637,
    },
    "ST PAULS BLOCK": {
      latitude: 12.870741486764471,
      longitude: 80.22212957630829,
    },
    "SATHYABAMA HOSPITAL": {
      latitude: 12.87070764285035,
      longitude: 80.22300168933656,
    },
    "DENTAL BLOCK SIST": {
      latitude: 12.870733661244937,
      longitude: 80.22335220423822,
    },
    "BOYS MESS SCAS": {
      latitude: 12.870720901158375,
      longitude: 80.22350152813087,
    },
    "GIRLS MESS SCAS": {
      latitude: 12.870847279302932,
      longitude: 80.22288911333135,
    },
    "ST ANTHONY ILLAM": {
      latitude: 12.870280756085277,
      longitude: 80.22446038191934,
    },
    "SATHYABAMA CENTRE FOR ADVANCED STUDIES": {
      latitude: 12.870984927616139,
      longitude: 80.22604646897263,
    },
    "SIST MAIN GATE": {
      latitude: 12.872912425104786,
      longitude: 80.22642248313797,
    },
    "SIST 2ND GATE": {
      latitude: 12.870530185307217,
      longitude: 80.2263827490805,
    },
  };

  $("#searchbox").autocomplete({
    source: blockOptions,
    appendTo: ".left-div",
    open: function(event, ui) {
      $(".autocomplete-suggestions").addClass("animating");
    },
    close: function(event, ui) {
      $(".autocomplete-suggestions").removeClass("animating");
    },
    select: function(event, ui) {
      var selectedBlock = ui.item.value;
      var coordinates = blockCoordinates[selectedBlock];
      if (coordinates) {
        var latitude = coordinates.latitude;
        var longitude = coordinates.longitude;
        var mapUrl =
          "https://maps.google.com/maps?q=" +
          latitude +
          "," +
          longitude +
          "&output=embed";
        $("#mapIframe").attr("src", mapUrl);
        console.log(mapUrl);

      }
    },
  });

  $(".submit-button").click(function() {
    var selectedBlock = $("#searchbox").val();
    var coordinates = blockCoordinates[selectedBlock];
    if (coordinates) {
      var latitude = coordinates.latitude;
      var longitude = coordinates.longitude;
      var mapUrl =
        "https://maps.google.com/maps?q=" +
        latitude +
        "," +
        longitude +
        "&output=embed";
      $("#mapIframe").attr("src", mapUrl);
    }
  });
});