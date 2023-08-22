// JavaScript for Autocomplete Suggestions
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
    "DATA SCIENCE LAB",
    "Science & Humanity Department",
    "PHYSICS LABORATORY",
    "Chemisty lab",
    "Girls Mess MAIN",
    "BOOK STORE",
    "Security",
    "IT STAFF ROOM",
    "CISCO LAB",
    "EEE DEPT",
    "ECE DEPT",
    "DEPT OF AUTOMOBILE ENG",
    "DEPT OF BIOMEDICAL ENG",
    "ROBOTICS LAB",
    "DEPT OF VISCOM",
    "DEPT OF MECHANICAL AND PRODUCTION",
    "DEPT OF CIVIL ENGINEERING",
    "DEPT OF BIOTECH",
    "IT TOWER LAB",
    "DEPT OF CHEM ENG",
    "OPEN AUDITORIUM",
    "REMIBAI JEPPIAR AUDITORIUM",
    "DEPT OF AERONAUTICS",
    "PLACEMENT OFFICE",
    "CENTRAL LIBRARY",
    "CHURCH IN COLLEGE",
    "DEPT OF MECHATRONIX",
    "INTERNATIONAL RESEARCH CENTER",
    "ADMINISTRATION BLOCK",
    "ACADEMY OF SCIENCES",
    "JEPPIAR MEMORIAL",
    "BOYS MESS MAIN",
    "BOYS VEG MAIN",
    "CANTEEN",
    "DEPT OF IT",
    "DEPT OF MBA",
    "FUEL STN SIST",
    "CRICKET GROUND",
    "IOB ATM",
    "GOPALAKRISHNA ILLAM",
    "MGR ILLAM",
    "OPEN GROUND",
    "BASKETBALL COURT",
    "DEPT OF ARCHITECRURE",
    "INDOOR BADMINTON STADIUM",
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
    "DATA SCIENCE LAB": {
      latitude: 12.875009754138773,
      longitude: 80.2214006211087,
    },
    "Science & Humanity Department": {
      latitude: 12.875148399391858,
      longitude: 80.22158421541582,
    },
    "PHYSICS LABORATORY": {
      latitude: 12.875410564735047,
      longitude: 80.2215299128744,
    },
    "Chemisty lab": {
      latitude: 12.875090420480841,
      longitude: 80.22203156492374,
    },
    "Girls Mess MAIN": {
      latitude: 12.875143357747959,
      longitude: 80.2216643763103,
    },
    "BOOK STORE": {
      latitude: 12.874674484410523,
      longitude: 80.22038438785822,
    },
    Security: {
      latitude: 12.873500940826661,
      longitude: 80.22229658080218,
    },
    "IT STAFF ROOM": {
      latitude: 12.874125241691395,
      longitude: 80.22114738285138,
    },
    "CISCO LAB": {
      latitude: 12.87403381775634,
      longitude: 80.22116822316441,
    },
    "EEE DEPT": {
      latitude: 12.873879993282426,
      longitude: 80.22093897972115,
    },
    "ECE DEPT": {
      latitude: 12.873671024034586,
      longitude: 80.2208526412815,
    },
    "DEPT OF AUTOMOBILE ENG": {
      latitude: 12.874953134313571,
      longitude: 80.22014719706938,
    },
    "DEPT OF BIOMEDICAL ENG": {
      latitude: 12.874727525962136,
      longitude: 80.22014193737324,
    },
    "ROBOTICS LAB": {
      latitude: 12.87508388451522,
      longitude: 80.22002096436205,
    },
    "DEPT OF VISCOM": {
      latitude: 12.875258218016505,
      longitude: 80.21968434382639,
    },
    "DEPT OF MECHANICAL AND PRODUCTION": {
      latitude: 12.873981998776284,
      longitude: 80.22037022962911,
    },
    "DEPT OF CIVIL ENGINEERING": {
      latitude: 12.874411540358581,
      longitude: 80.22041935777101,
    },
    "DEPT OF BIOTECH": {
      latitude: 12.87449086329448,
      longitude: 80.220136870969,
    },
    "IT TOWER LAB": {
      latitude: 12.87384537219599,
      longitude: 80.21987718988773,
    },
    "DEPT OF CHEM ENG": {
      latitude: 12.874125669004451,
      longitude: 80.2192078706193,
    },
    "OPEN AUDITORIUM": {
      latitude: 12.874481783349612,
      longitude: 80.21896512453965,
    },
    "REMIBAI JEPPIAR AUDITORIUM": {
      latitude: 12.874396775455113,
      longitude: 80.2187270919761,
    },
    "DEPT OF AERONAUTICS": {
      latitude: 12.874523138532721,
      longitude: 80.21833351340116,
    },
    "PLACEMENT OFFICE": {
      latitude: 12.87380046812792,
      longitude: 80.21913594183148,
    },
    "CENTRAL LIBRARY": {
      latitude: 12.873497881766749,
      longitude: 80.2188548936529,
    },
    "CHURCH IN COLLEGE": {
      latitude: 12.87404835603964,
      longitude: 80.21871523169885,
    },
    "DEPT OF MECHATRONIX": {
      latitude: 12.873221428479887,
      longitude: 80.2191701587265,
    },
    "INTERNATIONAL RESEARCH CENTER": {
      latitude: 12.87264559102071,
      longitude: 80.22116779837471,
    },
    "ADMINISTRATION BLOCK": {
      latitude: 12.873108695017175,
      longitude: 80.22188874656037,
    },
    "ACADEMY OF SCIENCES": {
      latitude: 12.872956143206048,
      longitude: 80.22095542599541,
    },
    "JEPPIAR MEMORIAL": {
      latitude: 12.873299518642561,
      longitude: 80.22131347346577,
    },
    "BOYS MESS MAIN": {
      latitude: 12.872771503052524,
      longitude: 80.21850285896448,
    },
    "BOYS VEG MAIN": {
      latitude: 12.871918826865585,
      longitude: 80.21791731431503,
    },
    CANTEEN: {
      latitude: 12.872439708893376,
      longitude: 80.21943241120937,
    },
    "DEPT OF IT": {
      latitude: 12.872924913101599,
      longitude: 80.21769041575376,
    },
    "DEPT OF MBA": {
      latitude: 12.871947368368016,
      longitude: 80.21820276734803,
    },
    "FUEL STN SIST": {
      latitude: 12.873745476901798,
      longitude: 80.21610212582105,
    },
    "CRICKET GROUND": {
      latitude: 12.872792909115322,
      longitude: 80.21660349846483,
    },
    "IOB ATM": {
      latitude: 12.87369552962545,
      longitude: 80.22034000543971,
    },
    "GOPALAKRISHNA ILLAM": {
      latitude: 12.871822499239077,
      longitude: 80.21963003250231,
    },
    "MGR ILLAM": {
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
    "DEPT OF ARCHITECRURE": {
      latitude: 12.870680835763773,
      longitude: 80.22016434202794,
    },
    "INDOOR BADMINTON STADIUM": {
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