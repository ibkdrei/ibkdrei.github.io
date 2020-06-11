mapboxgl.accessToken = 'pk.eyJ1IjoiY2d1dGgiLCJhIjoiY2syZGVpbzFkMDJpeDNibGtuNnhucDJnMiJ9.YbgYZkJ7Wcb_6wp6GvupHA';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cguth/ck3zypy3p4rqq1ck0xkyfhwt0',
    center: [11.5, 47.25],
    zoom: 10
});


L.geoJSON(herzogstand).addTo(map);

// map.data.loadGeoJson('track_points.js');

// map.on('load', function () {
//     map.addSource('route', {
//         'type': 'geojson',
//         'data': {
//             'type': 'Feature',
//             'properties': {},
//             'geometry': {
//                 'type': 'LineString',
//                 'coordinates': [
//                     [11.316749, 47.596089],
//                     [11.316719, 47.596089],
//                     [11.316719, 47.596089],
//                     [11.316607, 47.596209],
//                     [11.316691, 47.596207],
//                     [11.316838, 47.596217],
//                     [11.316958, 47.596246],
//                     [11.316965, 47.596296],
//                     [11.31697, 47.596372],
//                     [11.317038, 47.596468],
//                     [11.31755, 47.596597],
//                     [11.3176, 47.596676],
//                     [11.317644, 47.596761],
//                     [11.317679, 47.596823],
//                     [11.317711, 47.596869],
//                     [11.31772, 47.596882],
//                     [11.317626, 47.597098],
//                     [11.317972, 47.597362],
//                     [11.318319, 47.597627],
//                     [11.318319, 47.597627],
//                     [11.318253, 47.597986],
//                     [11.318797, 47.598219],
//                     [11.31838, 47.598185],
//                     [11.317964, 47.598151],
//                     [11.318393, 47.598458],
//                     [11.317924, 47.598424],
//                     [11.317456, 47.598391],
//                     [11.317672, 47.598601],
//                     [11.317888, 47.598812],
//                     [11.317512, 47.598835],
//                     [11.317364, 47.598771],
//                     [11.317005, 47.598733],
//                     [11.316594, 47.598511],
//                     [11.316522, 47.598491],
//                     [11.31625, 47.598514],
//                     [11.315723, 47.598419],
//                     [11.315196, 47.598324],
//                     [11.314877, 47.598285],
//                     [11.31451, 47.598234],
//                     [11.314734, 47.598417],
//                     [11.314957, 47.5986],
//                     [11.314823, 47.598637],
//                     [11.314966, 47.598747],
//                     [11.314479, 47.598673],
//                     [11.313992, 47.598598],
//                     [11.313505, 47.598524],
//                     [11.313776, 47.598746],
//                     [11.314047, 47.598967],
//                     [11.313543, 47.59889],
//                     [11.313039, 47.598813],
//                     [11.312528, 47.598745],
//                     [11.312111, 47.598608],
//                     [11.31171, 47.598513],
//                     [11.31131, 47.598417],
//                     [11.311648, 47.59874],
//                     [11.311986, 47.599063],
//                     [11.311593, 47.599033],
//                     [11.311121, 47.598932],
//                     [11.31065, 47.59883],
//                     [11.310795, 47.599006],
//                     [11.310812, 47.599058],
//                     [11.310622, 47.59911],
//                     [11.310452, 47.599084],
//                     [11.310282, 47.599038],
//                     [11.309721, 47.59906],
//                     [11.309611, 47.599154],
//                     [11.309599, 47.59939],
//                     [11.309733, 47.599422],
//                     [11.309887, 47.599422],
//                     [11.309984, 47.599562],
//                     [11.309795, 47.599744],
//                     [11.310187, 47.599849],
//                     [11.310579, 47.599954],
//                     [11.310087, 47.600104],
//                     [11.309733, 47.600404],
//                     [11.310068, 47.600435],
//                     [11.310403, 47.600466],
//                     [11.310362, 47.600755],
//                     [11.310662, 47.600782],
//                     [11.310934, 47.600968],
//                     [11.310953, 47.601002],
//                     [11.311156, 47.601364],
//                     [11.31141, 47.60162],
//                     [11.311446, 47.601814],
//                     [11.311073, 47.601924],
//                     [11.310699, 47.602034],
//                     [11.310351, 47.602221],
//                     [11.310207, 47.602509],
//                     [11.310062, 47.602796],
//                     [11.309711, 47.602783],
//                     [11.309359, 47.602769],
//                     [11.3092, 47.602644],
//                     [11.308846, 47.602743],
//                     [11.308505, 47.602652],
//                     [11.308337, 47.6028],
//                     [11.308702, 47.602835],
//                     [11.308488, 47.603063],
//                     [11.30835, 47.603419],
//                     [11.308367, 47.603641],
//                     [11.308168, 47.604014],
//                     [11.308269, 47.604232],
//                     [11.308305, 47.60404],
//                     [11.308495, 47.604367],
//                     [11.308423, 47.604457],
//                     [11.308504, 47.604715],
//                     [11.308732, 47.604932],
//                     [11.308708, 47.605031],
//                     [11.308593, 47.605069],
//                     [11.308084, 47.604924],
//                     [11.30825, 47.605028],
//                     [11.307972, 47.605],
//                     [11.307775, 47.605144],
//                     [11.307623, 47.605136],
//                     [11.3073, 47.605032],
//                     [11.307466, 47.605256],
//                     [11.307385, 47.605292],
//                     [11.306803, 47.605103],
//                     [11.30622, 47.604915],
//                     [11.305884, 47.604946],
//                     [11.305548, 47.604977],
//                     [11.305681, 47.605014],
//                     [11.305874, 47.605126],
//                     [11.305573, 47.605244],
//                     [11.305776, 47.605237],
//                     [11.305633, 47.605346],
//                     [11.305442, 47.605406],
//                     [11.305688, 47.605397],
//                     [11.305509, 47.605526],
//                     [11.30589, 47.605553],
//                     [11.305374, 47.605678],
//                     [11.304858, 47.605804],
//                     [11.304724, 47.605893],
//                     [11.304724, 47.605893],
//                     [11.30465, 47.605944],
//                     [11.304928, 47.605882],
//                     [11.305521, 47.605919],
//                     [11.305002, 47.606181],
//                     [11.305098, 47.606296],
//                     [11.305238, 47.606225],
//                     [11.30563, 47.606229],
//                     [11.305436, 47.60638],
//                     [11.30548, 47.606446],
//                     [11.305513, 47.606397],
//                     [11.30561, 47.606379],
//                     [11.306186, 47.606577],
//                     [11.306762, 47.606774],
//                     [11.306225, 47.606745],
//                     [11.306066, 47.606807],
//                     [11.3062, 47.607107],
//                     [11.30634, 47.606956],
//                     [11.306416, 47.60718],
//                     [11.306547, 47.607092],
//                     [11.306869, 47.607194],
//                     [11.307191, 47.607296],
//                     [11.30762, 47.607387],
//                     [11.308049, 47.607477],
//                     [11.308264, 47.607528],
//                     [11.308732, 47.607547],
//                     [11.309201, 47.607567],
//                     [11.30959, 47.607655],
//                     [11.309979, 47.607744],
//                     [11.310449, 47.607733],
//                     [11.310972, 47.607635],
//                     [11.311346, 47.607569],
//                     [11.311537, 47.60754],
//                     [11.311502, 47.607661],
//                     [11.311474, 47.607703],
//                     [11.311374, 47.607759],
//                     [11.311326, 47.607786],
//                     [11.311295, 47.607822],
//                     [11.31132, 47.607856],
//                     [11.31132, 47.607856],
//                     [11.311256, 47.607937],
//                     [11.311213, 47.60801],
//                     [11.311197, 47.608076],
//                     [11.311204, 47.608148],
//                     [11.311191, 47.608191],
//                     [11.311142, 47.608279],
//                     [11.311087, 47.608355],
//                     [11.310989, 47.608434],
//                     [11.310863, 47.608538],
//                     [11.31065, 47.608617],
//                     [11.310463, 47.608726],
//                     [11.310068, 47.608952],
//                     [11.309683, 47.609309],
//                     [11.309418, 47.609626],
//                     [11.309328, 47.609795],
//                     [11.309287, 47.609867],
//                     [11.309156, 47.609957],
//                     [11.309022, 47.610107],
//                     [11.30885, 47.610337],
//                     [11.30876, 47.61054],
//                     [11.308619, 47.61068],
//                     [11.308566, 47.610917],
//                     [11.308513, 47.611154],
//                     [11.308205, 47.61151],
//                     [11.308204, 47.611756],
//                     [11.308298, 47.611861],
//                     [11.308636, 47.612066],
//                     [11.308581, 47.612099],
//                     [11.308318, 47.612032],
//                     [11.308675, 47.612224],
//                     [11.309032, 47.612415],
//                     [11.30954, 47.612623],
//                     [11.309801, 47.612764],
//                     [11.309411, 47.612686],
//                     [11.309022, 47.612608],
//                     [11.308671, 47.612545],
//                     [11.308321, 47.612483],
//                     [11.308758, 47.61267],
//                     [11.308956, 47.612787],
//                     [11.309339, 47.612968],
//                     [11.308722, 47.612853],
//                     [11.308317, 47.612807],
//                     [11.308622, 47.612938],
//                     [11.309084, 47.613135],
//                     [11.309548, 47.613295],
//                     [11.309798, 47.613495],
//                     [11.30959, 47.613407],
//                     [11.309395, 47.613356],
//                     [11.309135, 47.613377],
//                     [11.308861, 47.613306],
//                     [11.308769, 47.613316],
//                     [11.308238, 47.613257],
//                     [11.308126, 47.613268],
//                     [11.308135, 47.613282],
//                     [11.308278, 47.613321],
//                     [11.308422, 47.613364],
//                     [11.308447, 47.613396],
//                     [11.308418, 47.6134],
//                     [11.308418, 47.6134],
//                     [11.308447, 47.613396],
//                     [11.308422, 47.613364],
//                     [11.308278, 47.613321],
//                     [11.308278, 47.613321],
//                     [11.308135, 47.613282],
//                     [11.308126, 47.613268],
//                     [11.308091, 47.613282],
//                     [11.308073, 47.613325],
//                     [11.308061, 47.61341],
//                     [11.308073, 47.613478],
//                     [11.308064, 47.613492],
//                     [11.308007, 47.613468],
//                     [11.307906, 47.61347],
//                     [11.307911, 47.613524],
//                     [11.307729, 47.613648],
//                     [11.307591, 47.613784],
//                     [11.307529, 47.613882],
//                     [11.307554, 47.614025],
//                     [11.30766, 47.614069],
//                     [11.307392, 47.614155],
//                     [11.307331, 47.614113],
//                     [11.307201, 47.614222],
//                     [11.307171, 47.614151],
//                     [11.307017, 47.614229],
//                     [11.306922, 47.614218],
//                     [11.30662, 47.614244],
//                     [11.306279, 47.614241],
//                     [11.30618, 47.614241],
//                     [11.306046, 47.614212],
//                     [11.305701, 47.614238],
//                     [11.305564, 47.614254],
//                     [11.30547, 47.614236],
//                     [11.305269, 47.614268],
//                     [11.305192, 47.614236],
//                     [11.305091, 47.614282],
//                     [11.3048, 47.614323],
//                     [11.304708, 47.614316],
//                     [11.304539, 47.614367],
//                     [11.304266, 47.614365],
//                     [11.30405, 47.61434],
//                     [11.303668, 47.614313],
//                     [11.303287, 47.614284],
//                     [11.30306, 47.61432],
//                     [11.302792, 47.614346],
//                     [11.302545, 47.614509],
//                     [11.302298, 47.614672],
//                     [11.30207, 47.614613],
//                     [11.30188, 47.614652],
//                     [11.301707, 47.614642],
//                     [11.301398, 47.614661],
//                     [11.301296, 47.614683],
//                     [11.301134, 47.614702],
//                     [11.300967, 47.614777],
//                     [11.300761, 47.614784],
//                     [11.300539, 47.614745],
//                     [11.300251, 47.614691],
//                     [11.300059, 47.614719],
//                     [11.299754, 47.614764],
//                     [11.299372, 47.614831],
//                     [11.299042, 47.614739],
//                     [11.29867, 47.614767],
//                     [11.298527, 47.614762],
//                     [11.29826, 47.614712],
//                     [11.298124, 47.614756],
//                     [11.297788, 47.614833],
//                     [11.2974, 47.614836],
//                     [11.297281, 47.614884],
//                     [11.296735, 47.614828],
//                     [11.296593, 47.614876],
//                     [11.296096, 47.614903],
//                     [11.295927, 47.614901],
//                     [11.295786, 47.614946],
//                     [11.29552, 47.614943],
//                     [11.295144, 47.614887],
//                     [11.294923, 47.614849],
//                     [11.294878, 47.614826],
//                     [11.294811, 47.614844],
//                     [11.294375, 47.614792],
//                     [11.293991, 47.6148],
//                     [11.293825, 47.614787],
//                     [11.293437, 47.614863],
//                     [11.293008, 47.614834],
//                     [11.292383, 47.614925],
//                     [11.291963, 47.615068],
//                     [11.291354, 47.615099],
//                     [11.290728, 47.614988],
//                     [11.290106, 47.614954],
//                     [11.289817, 47.614979],
//                     [11.289504, 47.614915],
//                     [11.288932, 47.614947],
//                     [11.288509, 47.614908],
//                     [11.288066, 47.614802],
//                     [11.287599, 47.614724],
//                     [11.287518, 47.614765],
//                     [11.287199, 47.614666],
//                     [11.286819, 47.614534],
//                     [11.286577, 47.614446],
//                     [11.286425, 47.614463],
//                     [11.286315, 47.614408],
//                     [11.286179, 47.614454],
//                     [11.285985, 47.614389],
//                     [11.285751, 47.614292],
//                     [11.285348, 47.614111],
//                     [11.285204, 47.614137],
//                     [11.285051, 47.614126],
//                     [11.284965, 47.614078],
//                     [11.284892, 47.61409],
//                     [11.28473, 47.614077],
//                     [11.284626, 47.614044],
//                     [11.284147, 47.613935],
//                     [11.283914, 47.613799],
//                     [11.283612, 47.613702],
//                     [11.283488, 47.613562],
//                     [11.283131, 47.613424],
//                     [11.282946, 47.613423],
//                     [11.28277, 47.613454],
//                     [11.282508, 47.613418],
//                     [11.282322, 47.613449],
//                     [11.282158, 47.613443],
//                     [11.28224, 47.613507],
//                     [11.282482, 47.613566],
//                     [11.282606, 47.613741],
//                     [11.282544, 47.613772],
//                     [11.282535, 47.613877],
//                     [11.282396, 47.613968],
//                     [11.28231, 47.613996],
//                     [11.282234, 47.613928],
//                     [11.282166, 47.613978],
//                     [11.282052, 47.613928],
//                     [11.281908, 47.613969],
//                     [11.281781, 47.613951],
//                     [11.281678, 47.613917],
//                     [11.281555, 47.613882],
//                     [11.281373, 47.613822],
//                     [11.28127, 47.613792],
//                     [11.281266, 47.613762],
//                     [11.281174, 47.61375],
//                     [11.281105, 47.613684],
//                     [11.280981, 47.613676],
//                     [11.280884, 47.613606],
//                     [11.280828, 47.613536],
//                     [11.280726, 47.613405],
//                     [11.280677, 47.613424],
//                     [11.28063, 47.613329],
//                     [11.280607, 47.613249],
//                     [11.280577, 47.613113],
//                     [11.28059, 47.612991],
//                     [11.280623, 47.612881],
//                     [11.280654, 47.612799],
//                     [11.280669, 47.612724],
//                     [11.280688, 47.612629],
//                     [11.280699, 47.612568],
//                     [11.280661, 47.612545],
//                     [11.280604, 47.612509],
//                     [11.280602, 47.612442],
//                     [11.280634, 47.612318],
//                     [11.280585, 47.612266],
//                     [11.280536, 47.612283],
//                     [11.280432, 47.612341],
//                     [11.280432, 47.612341],
//                     [11.28042, 47.612348],
//                     [11.28037, 47.612414],
//                     [11.280338, 47.612477],
//                     [11.280241, 47.612342],
//                     [11.280214, 47.612303],
//                     [11.280282, 47.612006],
//                     [11.280339, 47.611954],
//                     [11.280378, 47.611853],
//                     [11.28027, 47.61183],
//                     [11.280265, 47.611718],
//                     [11.28016, 47.611715],
//                     [11.280144, 47.611545],
//                     [11.280108, 47.611514],
//                     [11.28002, 47.611498],
//                     [11.279974, 47.611386],
//                     [11.279875, 47.61141],
//                     [11.279814, 47.611244],
//                     [11.279748, 47.611202],
//                     [11.279674, 47.611246],
//                     [11.279563, 47.61141],
//                     [11.279478, 47.611543],
//                     [11.279206, 47.611308],
//                     [11.27894, 47.611056],
//                     [11.278744, 47.610844],
//                     [11.27857, 47.610576],
//                     [11.278306, 47.61059],
//                     [11.278283, 47.610395],
//                     [11.278451, 47.610288],
//                     [11.278556, 47.610071],
//                     [11.278366, 47.610106],
//                     [11.278379, 47.609984],
//                     [11.278558, 47.609938],
//                     [11.278622, 47.609865],
//                     [11.279179, 47.609855],
//                     [11.279331, 47.609776],
//                     [11.279161, 47.609713],
//                     [11.278851, 47.609684],
//                     [11.278828, 47.60963],
//                     [11.279101, 47.609517],
//                     [11.278964, 47.60951],
//                     [11.279092, 47.60942],
//                     [11.279544, 47.609284],
//                     [11.279528, 47.609244],
//                     [11.27969, 47.609242],
//                     [11.279574, 47.609224],
//                     [11.279727, 47.609175],
//                     [11.279635, 47.609117],
//                     [11.279736, 47.609088],
//                     [11.279796, 47.609115],
//                     [11.279745, 47.609066],
//                     [11.279648, 47.608986],
//                     [11.279494, 47.608937],
//                     [11.279538, 47.608911],
//                     [11.27943, 47.608882],
//                     [11.279307, 47.608926],
//                     [11.2794, 47.608824],
//                     [11.279504, 47.608777],
//                     [11.279651, 47.608778],
//                     [11.279576, 47.608739],
//                     [11.27961, 47.608681],
//                     [11.279705, 47.608661],
//                     [11.27945, 47.608506],
//                     [11.279279, 47.608494],
//                     [11.279109, 47.608525],
//                     [11.278932, 47.608603],
//                     [11.279023, 47.608166],
//                     [11.27957, 47.607921],
//                     [11.279805, 47.607864],
//                     [11.27961, 47.607715],
//                     [11.279336, 47.60761],
//                     [11.279603, 47.607468],
//                     [11.280071, 47.607452],
//                     [11.280329, 47.607508],
//                     [11.28045, 47.607609],
//                     [11.280899, 47.60757],
//                     [11.280804, 47.607467],
//                     [11.280783, 47.607337],
//                     [11.281012, 47.607383],
//                     [11.280848, 47.607116],
//                     [11.280754, 47.606809],
//                     [11.280526, 47.606643],
//                     [11.280297, 47.606477],
//                     [11.280651, 47.606424],
//                     [11.280644, 47.606322],
//                     [11.280624, 47.606322],
//                     [11.280644, 47.606322],
//                     [11.280644, 47.606322],
//                     [11.280691, 47.606254],
//                     [11.280757, 47.606156],
//                     [11.281034, 47.605843],
//                     [11.28113, 47.605504],
//                     [11.281246, 47.605356],
//                     [11.281207, 47.605236],
//                     [11.281273, 47.605109],
//                     [11.281408, 47.605047],
//                     [11.281428, 47.604905],
//                     [11.281288, 47.604553],
//                     [11.281342, 47.604352],
//                     [11.281547, 47.604219],
//                     [11.281909, 47.604001],
//                     [11.282271, 47.603783],
//                     [11.282525, 47.603716],
//                     [11.282751, 47.603421],
//                     [11.282977, 47.603126],
//                     [11.283338, 47.603082],
//                     [11.283507, 47.602904],
//                     [11.283997, 47.60267],
//                     [11.284218, 47.60265],
//                     [11.284335, 47.60258],
//                     [11.284371, 47.602513],
//                     [11.284376, 47.602479],
//                     [11.284362, 47.602411],
//                     [11.28418, 47.602219],
//                     [11.283899, 47.602027],
//                     [11.283613, 47.601894],
//                     [11.28339, 47.601812],
//                     [11.283249, 47.601651],
//                     [11.283205, 47.601457],
//                     [11.283214, 47.601256],
//                     [11.283116, 47.601042],
//                     [11.283314, 47.600785],
//                     [11.283224, 47.600371],
//                     [11.283067, 47.60014],
//                     [11.282861, 47.599946],
//                     [11.283039, 47.599684],
//                     [11.282965, 47.5996],
//                     [11.283099, 47.599428],
//                     [11.283213, 47.599243],
//                     [11.283496, 47.599008],
//                     [11.283675, 47.598827],
//                     [11.284012, 47.598744],
//                     [11.284214, 47.598617],
//                     [11.28453, 47.598616],
//                     [11.284668, 47.598669],
//                     [11.285094, 47.598679],
//                     [11.285737, 47.598764],
//                     [11.286123, 47.598878],
//                     [11.286523, 47.598978],
//                     [11.287125, 47.598996],
//                     [11.287489, 47.598983],
//                     [11.287853, 47.59897],
//                     [11.288464, 47.598904],
//                     [11.289089, 47.598878],
//                     [11.289656, 47.598856],
//                     [11.290186, 47.59874],
//                     [11.29049, 47.598743],
//                     [11.290784, 47.598655],
//                     [11.291129, 47.598673],
//                     [11.291475, 47.598691],
//                     [11.291889, 47.598619],
//                     [11.292229, 47.598625],
//                     [11.29257, 47.598632],
//                     [11.293039, 47.59877],
//                     [11.293135, 47.598622],
//                     [11.293229, 47.598745],
//                     [11.293301, 47.59863],
//                     [11.293355, 47.5987],
//                     [11.293374, 47.598528],
//                     [11.29355, 47.598463],
//                     [11.293645, 47.598469],
//                     [11.293707, 47.598383],
//                     [11.293785, 47.598412],
//                     [11.293884, 47.598301],
//                     [11.29402, 47.598427],
//                     [11.29409, 47.598299],
//                     [11.294207, 47.598361],
//                     [11.294319, 47.598245],
//                     [11.29432, 47.598199],
//                     [11.294516, 47.59821],
//                     [11.294642, 47.59817],
//                     [11.295031, 47.598256],
//                     [11.295192, 47.59821],
//                     [11.295246, 47.598263],
//                     [11.295476, 47.598152],
//                     [11.295611, 47.59817],
//                     [11.295667, 47.598278],
//                     [11.295911, 47.598265],
//                     [11.295988, 47.598238],
//                     [11.296015, 47.598298],
//                     [11.296073, 47.598226],
//                     [11.296163, 47.598262],
//                     [11.296222, 47.598211],
//                     [11.296287, 47.598263],
//                     [11.296374, 47.598266],
//                     [11.296479, 47.598204],
//                     [11.296907, 47.598151],
//                     [11.297309, 47.598094],
//                     [11.297849, 47.597964],
//                     [11.298053, 47.597818],
//                     [11.298252, 47.59785],
//                     [11.298449, 47.597768],
//                     [11.298563, 47.597848],
//                     [11.298809, 47.59773],
//                     [11.298908, 47.597811],
//                     [11.299204, 47.597683],
//                     [11.299501, 47.597554],
//                     [11.299839, 47.59758],
//                     [11.299768, 47.597707],
//                     [11.299945, 47.597683],
//                     [11.300013, 47.597779],
//                     [11.300197, 47.597568],
//                     [11.300608, 47.597512],
//                     [11.301158, 47.597344],
//                     [11.301184, 47.597459],
//                     [11.301432, 47.597307],
//                     [11.301548, 47.597416],
//                     [11.301623, 47.597393],
//                     [11.301682, 47.597468],
//                     [11.301818, 47.597364],
//                     [11.301815, 47.597242],
//                     [11.302307, 47.596993],
//                     [11.302362, 47.597064],
//                     [11.302424, 47.597036],
//                     [11.302482, 47.597094],
//                     [11.302714, 47.596926],
//                     [11.302722, 47.596973],
//                     [11.302834, 47.59694],
//                     [11.302852, 47.597064],
//                     [11.303016, 47.596955],
//                     [11.303042, 47.597024],
//                     [11.303284, 47.596904],
//                     [11.303335, 47.596953],
//                     [11.303319, 47.597045],
//                     [11.303417, 47.596994],
//                     [11.303426, 47.597032],
//                     [11.303506, 47.596972],
//                     [11.303537, 47.597001],
//                     [11.303672, 47.596928],
//                     [11.303708, 47.596968],
//                     [11.30384, 47.596854],
//                     [11.303898, 47.596921],
//                     [11.303975, 47.596835],
//                     [11.30397, 47.596793],
//                     [11.304015, 47.596803],
//                     [11.304004, 47.596748],
//                     [11.304057, 47.596787],
//                     [11.304122, 47.596758],
//                     [11.30411, 47.596692],
//                     [11.30397, 47.596639],
//                     [11.303818, 47.596562],
//                     [11.303585, 47.59648],
//                     [11.303564, 47.596406],
//                     [11.303657, 47.596365],
//                     [11.303838, 47.596159],
//                     [11.3039, 47.596039],
//                     [11.304076, 47.595844],
//                     [11.304274, 47.595596],
//                     [11.304402, 47.595291],
//                     [11.304529, 47.594986],
//                     [11.305102, 47.594797],
//                     [11.30517, 47.594692],
//                     [11.30507, 47.594467],
//                     [11.304832, 47.594308],
//                     [11.304734, 47.594123],
//                     [11.304967, 47.593968],
//                     [11.30498, 47.59396],
//                     [11.30498, 47.59396],
//                     [11.30517, 47.593957],
//                     [11.305325, 47.593953],
//                     [11.305444, 47.593953],
//                     [11.305652, 47.593965],
//                     [11.305848, 47.593945],
//                     [11.305985, 47.593885],
//                     [11.30614, 47.593816],
//                     [11.306301, 47.593784],
//                     [11.306402, 47.593776],
//                     [11.306497, 47.593804],
//                     [11.306682, 47.593861],
//                     [11.306777, 47.593909],
//                     [11.306956, 47.593969],
//                     [11.307128, 47.594013],
//                     [11.307313, 47.594001],
//                     [11.307497, 47.593957],
//                     [11.307676, 47.593869],
//                     [11.307926, 47.59372],
//                     [11.308018, 47.593669],
//                     [11.308098, 47.593617],
//                     [11.308226, 47.593541],
//                     [11.308363, 47.593491],
//                     [11.308497, 47.593446],
//                     [11.308613, 47.59343],
//                     [11.308762, 47.593424],
//                     [11.308917, 47.593418],
//                     [11.30908, 47.593412],
//                     [11.309319, 47.593415],
//                     [11.309509, 47.593399],
//                     [11.30967, 47.593379],
//                     [11.309789, 47.593359],
//                     [11.309938, 47.593311],
//                     [11.310122, 47.593282],
//                     [11.310348, 47.593266],
//                     [11.310604, 47.593222],
//                     [11.310789, 47.593178],
//                     [11.310973, 47.593126],
//                     [11.311176, 47.593098],
//                     [11.311312, 47.593106],
//                     [11.311408, 47.593142],
//                     [11.311533, 47.593202],
//                     [11.31167, 47.593274],
//                     [11.311824, 47.593347],
//                     [11.311985, 47.593383],
//                     [11.312128, 47.593387],
//                     [11.312336, 47.593355],
//                     [11.312556, 47.593347],
//                     [11.312747, 47.593351],
//                     [11.312909, 47.593388],
//                     [11.313089, 47.593417],
//                     [11.313284, 47.593468],
//                     [11.31352, 47.593476],
//                     [11.313676, 47.593508],
//                     [11.313882, 47.59355],
//                     [11.314038, 47.593602],
//                     [11.31426, 47.593653],
//                     [11.314482, 47.593721],
//                     [11.314708, 47.593784],
//                     [11.314857, 47.593812],
//                     [11.314911, 47.593944],
//                     [11.314988, 47.59408],
//                     [11.315139, 47.594182],
//                     [11.315394, 47.594377],
//                     [11.315664, 47.594524],
//                     [11.315793, 47.594622],
//                     [11.315919, 47.594712],
//                     [11.315884, 47.594733],
//                     [11.3158, 47.594798],
//                     [11.315658, 47.594929],
//                     [11.315547, 47.595086],
//                     [11.315693, 47.595119],
//                     [11.315909, 47.59518],
//                     [11.31605, 47.595223],
//                     [11.316078, 47.595233],
//                     [11.316159, 47.595262],
//                     [11.316199, 47.595276],
//                     [11.316225, 47.5954],
//                     [11.31629, 47.59557],
//                     [11.316322, 47.595669],
//                     [11.316338, 47.595756],
//                     [11.316353, 47.595843],
//                     [11.316363, 47.595889],
//                     [11.3164, 47.595979],
//                     [11.316751, 47.595977],
//                     [11.317102, 47.595976],
//                     [11.317112, 47.596081]
//                 ]
//             }
//         }
//     });
//     map.addLayer({
//         'id': 'route',
//         'type': 'line',
//         'source': 'route',
//         'layout': {
//             'line-join': 'round',
//             'line-cap': 'round'
//         },
//         'paint': {
//             'line-color': '#888',
//             'line-width': 12
//         }
//     });
// });



// var gpx = `gpx/MM/Tour1.gpx`, {
//     async: true,

//     polyline_options: {
//     color: "black",
//     dashArray: [2, 5]
//     }
// }).addTo(maps);




// L.control.layers({
// //     "Etappen": overlay.etappen
// // }).addTo(mapbox);


// let drawEtappe = function(Nummer) {
//     overlay.etappen.clearLayers();

//     let track = ETAPPEN[Nummer];
//     console.log(track)

//     let gpx = new L.GPX(`gpx/MM/Tour${track}.gpx`, {
//         async: true,
//         marker_options: {
//             startIconUrl: `icons/number_${Nummer}.png`,
//             endIconUrl: "icons/finish.png",
//             shadowUrl: null,
//             iconSize: [32, 37],
//             iconAnchor: [16, 37],
//             popupAnchor: [0, -37]
//         },
//         polyline_options: {
//             color: "black",
//             dashArray: [2, 5]
//         }
//     }).addTo(mapbox);

//     gpx.on("loaded", function(evt) {
//         mapbox.fitBounds(evt.target.getBounds());
//     }).addTo(overlay.etappen);
//     overlay.etappen.addTo(mapbox);

// //     for (const key in ETAPPEN[Nummer]) {
// //         let val = ETAPPEN[Nummer][key];

// //         let track = document.querySelector(`#et-${key}`)
// //         if (key === "track") {
// //             track.href = `gpx/MM/Tour${ETAPPEN[Nummer][key]}.gpx`;
// //         }
// //         let elem = document.querySelector(`#et-${key}`);
// //         if (elem) {
// //             elem.innerHTML = val;
// //             console.log(val);
// //         }
// //     }
// // };
// drawEtappe(1);