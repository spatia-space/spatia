'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "af7c53f25dd85a25bf23390e75832a0d",
"version.json": "237bfa80bf969fc9d708dc36283f58c9",
"index.html": "b6fa9e0b2acce57a56f280e8a51f774e",
"/": "b6fa9e0b2acce57a56f280e8a51f774e",
"main.dart.js": "e200fae4c0b8816ca6c4d933bf0b792e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "d9d83c9376f921df49cab0dc265ac5b7",
"icons/favicon-16x16.png": "c9eb1f88a343d76509e9af0a07907abe",
"icons/favicon.ico": "ee1bde1dd8f2c93277a33a199e2af5fc",
"icons/apple-icon.png": "d1cdf3cb6001006e0cd8c1d9cc6f1924",
"icons/apple-icon-144x144.png": "7c823c3774e5cd48b0143a31902b53b1",
"icons/android-icon-192x192.png": "2afa77afcb68601591d084e0c472d416",
"icons/apple-icon-precomposed.png": "d1cdf3cb6001006e0cd8c1d9cc6f1924",
"icons/apple-icon-114x114.png": "1d2bb3dbd29070f9e69c46fe30a0eea1",
"icons/ms-icon-310x310.png": "7ed21102fa9769ea56ae0cc1ac90ee4e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ms-icon-144x144.png": "5b28427e533fbf1d5f4b97d180d4f7c2",
"icons/apple-icon-57x57.png": "fa23d1e0509815f5caa1e819151f0858",
"icons/apple-icon-152x152.png": "74b4fa4c4f67d5ec34d490ec83cf52f0",
"icons/ms-icon-150x150.png": "07115a72ce97325232a2c62a58a6e9e9",
"icons/android-icon-72x72.png": "d93ae44484c4b97510826191e3efa217",
"icons/android-icon-96x96.png": "530b53f99834e2c37039203bd42ccdc6",
"icons/android-icon-36x36.png": "2f3f7ffd3e7704419c680f109e0f0db2",
"icons/apple-icon-180x180.png": "fb0c4c0e3a686e2eab24390d255e88d9",
"icons/favicon-96x96.png": "d9d83c9376f921df49cab0dc265ac5b7",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "af67b42901f8755f3ef2d470d89add55",
"icons/apple-icon-76x76.png": "477ea32d3d46560ba57fecfcf4d775de",
"icons/apple-icon-60x60.png": "2842f60ce07fe84d7cdaf6bdd7d281f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "7c823c3774e5cd48b0143a31902b53b1",
"icons/apple-icon-72x72.png": "d93ae44484c4b97510826191e3efa217",
"icons/apple-icon-120x120.png": "cfafd941264b6b259edfd55bd98c150a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "74e987301cb6aec356966605d766bcc2",
"icons/ms-icon-70x70.png": "ae50b22a41b581839ee72b62d64ffbdf",
"manifest.json": "e10caad0df526ad71f95803b2ad20d80",
".git/ORIG_HEAD": "128f7593a3e628e24931e4dba66f64af",
".git/config": "0810b21da923957f1437d6ec4ca87d4a",
".git/objects/95/518423184a5255054123bf727bfa1346295f28": "8ea5309f0f832253729e8dbd0b89a0bb",
".git/objects/66/2845a212b6ad69625d280cfe78f658d5720963": "fd1a4477cf9fd32eb2244a597dd61a70",
".git/objects/50/ab9c2624868f4e3882dc62d63ff5e4db6f6728": "af3e1aacc8eceaa1bbd87d9c0942bd08",
".git/objects/6f/83f5d8687e47f90e0deedd45e137fa35353c35": "6ce3c50a1fa52f8555c4556c3bc6ac64",
".git/objects/03/0496d30a4233fc66736ee0c23190ce2c5822f9": "65461d5339120656f64a269a6d78ec90",
".git/objects/9e/5a2057e017df398ef6a31bd93a448ccb15678a": "ca6472218a5e67cd330fc347afa7ccca",
".git/objects/6a/602835125cb7d32f65c64dfc1b21a182d496c7": "87b630ea1bd7df22f007b7f1a63468f6",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/c2c7781ba5453f80ee0c22d47da699e40d4e7f": "badb62f01f66d2f23ad0ef1a99ebb6b5",
".git/objects/67/804ea2d28b8f99a0e0f2cac6e03a4a1f308ea7": "bf28859b13abcc040d5c0735bf861774",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/4e5a2bc0069fd97bb38d4a5d8c38d2d848aa58": "e61c022f6e02632b135a316281b00080",
".git/objects/9c/1691e676941cd0a6e8f5fe701b91684c957595": "2950527af1f3d8f9cf3bd99d3dab1c5d",
".git/objects/02/225e2da2bceab86e8e62bf8673a085009089d3": "903aef873392afb9b2c9e9329f869708",
".git/objects/b5/5b0573017913b300036e164a687601287b0ced": "7d572093add0b06246c1ef261d066650",
".git/objects/ac/c8397418078f45818f45c5e6f15a3bc371ecbd": "0ba1d7e5f3296e5a12ef47687ec0f8af",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/6d3ca84f760400dd4563d30bbd4f0761a26de0": "89c673726e8aef8d47afedc54ff60afe",
".git/objects/da/4b34ab1b99467b64e39c5611acd124cfe341e3": "daacb4896cc84eb315be0030f3c0c383",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/dbab007c0a609145e31e90e592b6c97f24e4ee": "4fc6bd5985a016a230b3ae4239c0a6b1",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/194135c2675522a961610d278266a01f798ea1": "fac930f4b77cefcbc325ad9d5abf5bcb",
".git/objects/f4/426c19223d7b48f12ba68f3015ab8662af5043": "7befefd31ab0c3c24e8f51dfe8c6d6c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/f599da3ad0656d584da4358b4049740c8390b5": "77c53425fccd58ad7e6d473c817fb38c",
".git/objects/f2/456824320d6dcb2244585cacb1629589cde3a2": "2804d9d66d4212743c062e8eb61cda1d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/c8/d698a9c314e0bd26455f0861d8e990f9dbe848": "1cb056df784fc1cfa72357285011aca5",
".git/objects/c1/0cea7ad021320c65be67a057cfa4877e7ea302": "4e0c0c8f7c76e69604884cc48247130c",
".git/objects/ec/2674d14ff23a6bca3a1a294d64c354e09459a0": "04ecbcb374810e1194162ef748f6e592",
".git/objects/20/a972707fd848b9a28cd53dd4ba5ede11766d5e": "5242de2adf4e2a5e9b6b0f1091cd6008",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/e06914eab9cf28b4b1d9a293344fc78a845ad8": "434199c6403b3ef2f55ebc3631f2f383",
".git/objects/7d/9337bbf5f2c6434e63434f3d4bd2fad375d22c": "242e18a4afbdae852a64f0544e4d68a5",
".git/objects/16/c64487ac5943c23de33ed71cf35e402aaa03ee": "1f7e151a61e3f8e53057eb8701e87152",
".git/objects/45/dbce03ee7dfb27a5868b8c9090b00521bf4f91": "abc153924c0eee06255afcaf2dad0d62",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/b242ff634a3a52db9c7e2a2a8846d2df055664": "eb050ff37cd370ccc8dea61c2f373a8a",
".git/objects/73/f0d9234223206502ceff44c3ac55666d9cbb48": "48ebc674593879a3e68234afbe219787",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/5e549353190e617c4899ed486a9adeb5e94877": "d96c7a6e8bc4b5def9f06e656ecba187",
".git/objects/75/91756b92c1969c4fd9a0d6e2340540ab62d66c": "481536b02df2a7a9afe2b305a776c1dc",
".git/objects/81/7ffd2c259d549a5ff8bfe7f1f4d0aa396d70b6": "534a98e0798a9bca33694ae45f637fac",
".git/objects/2a/95ac5d43cef398b95dd5edae2501707f9d43ba": "dfb0b9263d1cd3e7cfcaf992bb4c70b3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/2b425a1ab785ee7143f0f0fba305f55bfb9678": "c37688ca77804ce6fb647961494a28c6",
".git/objects/07/7d7223c9c66c99df858cd4c5636d793dd03a18": "a4ec9f88d4a131d525efd727acc31122",
".git/objects/9a/425a6168ff9f7e878b18926e0a83c74abc3f2c": "7464abf33a43a63810b97226c92c1a01",
".git/objects/36/c07548f61839b9c97e4a9b0d6fa97930b60290": "5dd870b1ad3905644248b8a5532b65a3",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/72f165725c004686c597eea041fd4889dd0fbb": "7153eaea744a8d173f55df92e4f0a0c8",
".git/objects/91/3ccc21e3579f38bd6c12f1b60a418020627477": "38ac77831a3fdf63d11b96c4cfc1992e",
".git/objects/62/098e92f54b6ac6049da7eee0a036f49aecf1bd": "67d6103d95001adfb41b720dcd224685",
".git/objects/30/7d4b60fcfe87333ce8bc5f22c0674bd7904574": "ef9308c1d336a24f143fcf4381f812a8",
".git/objects/01/459a21b5d5f364dd2fadbb9bc939bacddd9d88": "bcf1cdb1a10464e32a9459166ab6e821",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/39/127d534732280be41e1601ad3768357f7eb8c3": "2da94d4504555043c4af15e40d73d153",
".git/objects/0f/deeb6a0eca960b9d2d3c7b655c93d00483509b": "b9d59c94db0eb99d670f34ad4c8c92f6",
".git/objects/64/d55815e8456321ff7bdff3ce9b7ec322485242": "95892d3036fc929cfc8717d32185907f",
".git/objects/90/93665bd816c3f3f21baefe8b37864083fbf8d1": "c968d8b7379262e0a0bec240f3fe7e7f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5e3a8569948daeef5c7f482af0dbb13927bb6b": "fa6f9e34129051280462a884c097db76",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/9440d5ab7e8cc60c625805efe13193b44ca9ba": "56b5d94f4d38af1a39f436e3c67709e6",
".git/objects/aa/0823715955a253af9d985b5bc9332ddf8bbd78": "285dbbb813d160965a67e99216f5c7ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c78b351a9c60444a7e8f770becbec69d32e66": "885dc267f2b3eb25f2afbaefcce7c765",
".git/objects/b0/3434b4fdf534e9acaae5c12d530a246ff28292": "05bfa8289ac0fe60fe8b03135d495a24",
".git/objects/b0/5ae9e04fe6ade49829979a1a9a74651591d8ce": "6c6becf5c115c7dc81df19d00c57faac",
".git/objects/a6/9f7f09def0d8db52d7e5909a3d29d6947adf6f": "861b5bc99e35267d18ce969587435fe4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/b42815692da1d741d080698a199635a95cabe8": "b2d6673b1a52832ed63fcc3664668ed4",
".git/objects/ef/8f49a778d09f899f7ab0aead61017afc4a3cb4": "27de1c089469ecef2f85c9c8bb37806a",
".git/objects/e1/01b8b5255cea0948a5ff8bef2f3b4ad478995a": "502765045290f5530f54febdc02fa0a1",
".git/objects/cd/b7060fb0ca17bc50b7b8fe632e390cd9a95ea9": "2a157c66bd87b5c0f0ab7c9fd068f1a3",
".git/objects/f0/d5b52dbec5715f7fea66df75485b993588ec20": "c90a430d5048710eacc55501efacee78",
".git/objects/f7/ed7b3246810578d68d8e43958e2d838cf224ca": "2ef72e86be179f86f283259654395a69",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/f1/13380b0fa3212dae0a19f17c6de8fda74d0456": "55cf847472d228a27ad972a686fcb2b5",
".git/objects/cb/8b72757a667d503de879dcd4fbe9bed23e7c48": "21783058eb9d6cca73affe7e22fa3dcf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/443c14445766cdf4949a57aa512e29072faacd": "4e687f483ece5d5471dad17d2e432472",
".git/objects/41/9dea3af46aa493a7f93c785e42f742a959c934": "b39f575a2aef98e26e847d2b6b9d1e57",
".git/objects/41/5df439bb093bd019f85e3f1e688682c26283b1": "e52af30f369dfecc1ce6a602585a351c",
".git/objects/83/fc9858396b3690eec08c379957d0f4aaac8168": "d8de52857ceb5b2286e236232aff4f7b",
".git/objects/70/71eee86cc1e9ea792126f9ef5e00b8b2b6877a": "2825765ad6472023cdfcd373079d63c2",
".git/objects/4f/76def54f15530fd067a2de2fde8dbf012bad56": "4c1b901a7a0d72791edfb62fc3ddf312",
".git/objects/8d/e8a03aa14b144205aefad5eb76109b69ed0eee": "106dfe810d302ad098c57f1439b5a709",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/55dbcfd158de68e3e00795615d916d5354f5d2": "4dbbcf07a443c63bc345b2283b422ae9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/82/64f5909932381ec8c46ff5043628e98a92300a": "27b527fff18b250a852754e829e475b0",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/ec5a11e3afcbc6204a75b134b58755eddc798d": "20d4aa0507d832039f94e29161569e10",
".git/objects/47/8125537b429b74f655b51a3039e8e20df9150b": "2204de43d4f3610d14e455ab26cdf4f4",
".git/objects/13/d19ea6b09f234b30200138e151223af446b776": "862f329cad455f73f095570a29c23f85",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f3e55bbd177b3fd0713c4dd385020d52",
".git/logs/refs/heads/main": "f3e55bbd177b3fd0713c4dd385020d52",
".git/logs/refs/remotes/origin/main": "89f1f8542b2afdc5195018319d884033",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6100870ea63aab314c94e6a58230ff7f",
".git/refs/remotes/origin/main": "6100870ea63aab314c94e6a58230ff7f",
".git/index": "e825fae066a178703958cb4e4fbee003",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "c20711b18037dad19ce710cd79a945c9",
".git/FETCH_HEAD": "44452c1f4a07d70b5b4373bc4a56fe95",
"assets/AssetManifest.json": "be2f47943fec06f48113d8133a9978aa",
"assets/NOTICES": "b4bef48edc597aa4e53eef74a3753a61",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fec7c314c0101659c03eb497e1cd347e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "78907d802751e37c8bfd74b39f2a12f6",
"assets/fonts/MaterialIcons-Regular.otf": "fa7871ddc5b1c38b294bc9f857ed2e4d",
"assets/assets/images/jihaan.png": "7944b7c2126d12bcc07cb16912f452c0",
"assets/assets/images/arsy.png": "52e0537885a8b3363b8f7a59e7583e4e",
"assets/assets/images/zahrah.png": "3ad3e95d4742cd9c771709fa4e9be09d",
"assets/assets/images/delphy.png": "54031a59f21c214d8e1293772042f765",
"assets/assets/images/wahyu.png": "70d5e508d2df74f61c964f661b81b852",
"assets/assets/images/home_image.png": "700d1979e4f68a4383b64436cd4b3461",
"assets/assets/images/appstore.png": "cf54e9dd55b645c1ebfaa89545785ea1",
"assets/assets/images/cta.png": "ffb4ed6b7fe82e7b0eda72b382e2dc2c",
"assets/assets/images/app_preview.png": "52208fd1dc0bfed349f8b7d04cc738e3",
"assets/assets/images/main_image.png": "a7c50afbbb385f4a12878800a25cfc2d",
"assets/assets/images/zahra.png": "ac460b330531e8a3ffa16ff1234413cd",
"assets/assets/vectors/app_logo_white.svg": "48716cc85b9ff3c3c775baec809b6dde",
"assets/assets/vectors/04.svg": "7fb952b522b801c24c1248b86e23437c",
"assets/assets/vectors/appstore.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/vectors/pattern.svg": "1dc0bab4ce5f87c2cc3aec405fc5216b",
"assets/assets/vectors/02.svg": "92f5cf97ee4951213e702164742faca7",
"assets/assets/vectors/03.svg": "56c255639142568a129c50dde490757c",
"assets/assets/vectors/01.svg": "9a783e4cb6340b43757a8edc638d6e71",
"assets/assets/vectors/Character.svg": "254e4073d70eb68eda5a924a23542414",
"assets/assets/vectors/spatia_logo.svg": "134b23c679d451610813bd2f4bb377b1",
"assets/assets/vectors/about_spatia.svg": "57f5ed54ccaef69b8e48372f2776ee53",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
