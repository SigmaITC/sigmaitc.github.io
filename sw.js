importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "manifest.json",
    "revision": "b7c83a519d1ed4a895bf54b052f3f203"
  },
  {
    "url": "front-end-by-sigma.html",
    "revision": "84042f2f1245c9140e5a385f584c69ea"
  },
  {
    "url": "iam-by-sigma.html",
    "revision": "f95f92b1157cb439a4a29f882d6da55d"
  },
  {
    "url": "index.html",
    "revision": "5152e09980d4e209bf950624ba945119"
  },
  {
    "url": "java-by-sigma.html",
    "revision": "4dfb84500aacb84979b8241c793515a9"
  },
  {
    "url": "net-by-sigma.html",
    "revision": "dd5404a5b44981d4406668fdf6f4f39f"
  },
  {
    "url": "qt-by-sigma.html",
    "revision": "5f6e13a3f257ba4ab142e630e568b78a"
  },
  {
    "url": "rnd-by-sigma.html",
    "revision": "98e5ff74fb8776cec6f88e2d03a36842"
  },
  {
    "url": "assets/app.css",
    "revision": "cb2a5c1fa34297e636a03786e2a07b7f"
  },
  {
    "url": "assets/app.js",
    "revision": "31960165ac3c8c10e57fcd40d937c916"
  },
  {
    "url": "images/addy-osmani.jpg",
    "revision": "fa5d7d8c241c2791c4f5fcda1dd47105"
  },
  {
    "url": "images/akka.png",
    "revision": "3652f7355e06f96ab63527977d2c5b82"
  },
  {
    "url": "images/ampersand.png",
    "revision": "8fca9e36b92de6026a52fbccab052ced"
  },
  {
    "url": "images/angularjs.png",
    "revision": "c45dbd3f0d42208c03b75e38f9843c3e"
  },
  {
    "url": "images/apachejmeter.jpg",
    "revision": "878d6a6bd01df0eded5cfb0d3a33bdd7"
  },
  {
    "url": "images/appveyor.png",
    "revision": "b7c68fdb9da5deac012f3d9ea1a7e49d"
  },
  {
    "url": "images/atom-editor.png",
    "revision": "b52b3bb66002dd5af600af2219988a14"
  },
  {
    "url": "images/atomic-css.png",
    "revision": "04ddb0d6872a7bac978044a6f67121b8"
  },
  {
    "url": "images/atomicdesign.svg",
    "revision": "d2de84e0e4a9a9d6f643fcd405e3db06"
  },
  {
    "url": "images/aurelia.png",
    "revision": "6baa2e7f4679c513938a27aff1c9e814"
  },
  {
    "url": "images/autohotkey.jpg",
    "revision": "a1d433ff00fff4611e2673718f23d82d"
  },
  {
    "url": "images/ava.png",
    "revision": "b8cf191a412e0b6be53dae720fa5eab4"
  },
  {
    "url": "images/aws.jpg",
    "revision": "9b8cc49d87671902240d0c31596a382d"
  },
  {
    "url": "images/aws.png",
    "revision": "f39819d069811de61dda9ae9da7b6607"
  },
  {
    "url": "images/azure.png",
    "revision": "6a2be89978f99fbcd36066660d02a3e1"
  },
  {
    "url": "images/babel.png",
    "revision": "4e20b101655a7a31bca812e31364c5ca"
  },
  {
    "url": "images/backbone.png",
    "revision": "5fe58b07e2e165a9fe342bd0b73a793e"
  },
  {
    "url": "images/behaviordrivendevelopment.png",
    "revision": "2ddbdb13f9872b56dc02ba523a41e9a5"
  },
  {
    "url": "images/bem.png",
    "revision": "8c3a0a3601635f3c1321fdd82ab5a26a"
  },
  {
    "url": "images/bitbucket.png",
    "revision": "ca830e7a6a99057d7b63682089650af7"
  },
  {
    "url": "images/bootstrap.png",
    "revision": "599460569f2b899c690b47ab8d4fb58b"
  },
  {
    "url": "images/bower.jpg",
    "revision": "59c43bcc575f98f72af37dfad2d8a3cd"
  },
  {
    "url": "images/brad-frost.jpg",
    "revision": "115d9eb5550e00c1551bd336ab953884"
  },
  {
    "url": "images/browserify.png",
    "revision": "32a358bedf06a4b3d4543491c31a73f0"
  },
  {
    "url": "images/browserstack.png",
    "revision": "6533bd7406dd3f0c934da0c42b03212d"
  },
  {
    "url": "images/browsersync.png",
    "revision": "6cf6bcd5543731bc28ea1e2966e4a052"
  },
  {
    "url": "images/buddy.png",
    "revision": "33c1b3bbbb1c9e46e31e79bf8b51dbd8"
  },
  {
    "url": "images/c++developmenttooling.png",
    "revision": "050acefc6da1c10ac5848aa1c058bd01"
  },
  {
    "url": "images/calibre.png",
    "revision": "d67eca46f6f6cc2a8136c85e50965664"
  },
  {
    "url": "images/camel.jpg",
    "revision": "2026cd21a1781d3e8b22259ac29ed74a"
  },
  {
    "url": "images/casperjs.png",
    "revision": "ad5ec8a678bed43f8e25674c09ecddc7"
  },
  {
    "url": "images/chai.png",
    "revision": "bebb5bd37bf8aba55ea99cedb33029af"
  },
  {
    "url": "images/christian-heilmann.jpg",
    "revision": "7e88106b4ba2a20cbe53ad8dcee88ca7"
  },
  {
    "url": "images/circleci.svg",
    "revision": "44bb9ac6c650fa5770502eb655199920"
  },
  {
    "url": "images/cleancode.png",
    "revision": "102d22176228636dfe2d538eac72526c"
  },
  {
    "url": "images/clearcase.png",
    "revision": "248621c961d3c4e71dae0308739a6ca7"
  },
  {
    "url": "images/codeacademy.png",
    "revision": "84822a564f84853b46bdd7ba6619f8d2"
  },
  {
    "url": "images/codecademy.png",
    "revision": "84822a564f84853b46bdd7ba6619f8d2"
  },
  {
    "url": "images/codeclimate.png",
    "revision": "ae018dd5d9669878482faaf99315e4e9"
  },
  {
    "url": "images/codekit.png",
    "revision": "cb2fa76218c9943894f56759e177b5ff"
  },
  {
    "url": "images/codepen.png",
    "revision": "ac8ab2eaf8ed5b3e74b4a21b4526c4ea"
  },
  {
    "url": "images/codereview.png",
    "revision": "b7694d93d846ff61483c9f67890ff59a"
  },
  {
    "url": "images/contentful.png",
    "revision": "918b875f34755820725e6fc4e683e0dc"
  },
  {
    "url": "images/continuousintegration.png",
    "revision": "f80e58b0cca299af5dcafe3b438d9666"
  },
  {
    "url": "images/cordova.png",
    "revision": "216157ed3259375c83aee871efa7fbed"
  },
  {
    "url": "images/coursera.png",
    "revision": "b933abf000b8b16ddb6f2772f401630c"
  },
  {
    "url": "images/coverity.png",
    "revision": "a60e437a979963971536f32c0e4f74c8"
  },
  {
    "url": "images/cplusplus.png",
    "revision": "cd417258dd040b15ee7f80446286f8cd"
  },
  {
    "url": "images/cplusplusmultithreading.png",
    "revision": "7ec4dbb657756e1238aac61dcbbe3369"
  },
  {
    "url": "images/crazy-egg.png",
    "revision": "89b23aa6340e04a60fcefb1e10c0fc71"
  },
  {
    "url": "images/csharp.png",
    "revision": "db7d10e4764712fa0f2b7f459bdf58c2"
  },
  {
    "url": "images/css3.jpg",
    "revision": "158cb87f31d14312ebf87736f18dc3f0"
  },
  {
    "url": "images/cssnano.jpg",
    "revision": "d9db4ee5a6fe4ced1b94858fbb92e4cc"
  },
  {
    "url": "images/cssnext.png",
    "revision": "6b5702eee3b99e5daf2bc595c2adade2"
  },
  {
    "url": "images/cucumber.png",
    "revision": "07714fbe6c5188f98c58f11af024926e"
  },
  {
    "url": "images/cyclejs.svg",
    "revision": "b8b136193d4984401a01233a54f33f01"
  },
  {
    "url": "images/cyclops-react.png",
    "revision": "5d8a81dadc97fdad1a7bdb00f3ff07c8"
  },
  {
    "url": "images/dabblet.png",
    "revision": "794ad686f7b960e9ec9dbdacc30aa4af"
  },
  {
    "url": "images/david-dm.png",
    "revision": "71dd486d62777dfc243a831687c68bf0"
  },
  {
    "url": "images/designpatterns.jpg",
    "revision": "74aac914ec6dff68b55784e46c969b1a"
  },
  {
    "url": "images/docker.png",
    "revision": "bf09aaa1aae3af33430d894a342246b2"
  },
  {
    "url": "images/dotfiles.png",
    "revision": "e72e807a367c130c817b9233213518d6"
  },
  {
    "url": "images/dvcs.jpg",
    "revision": "de38c8f471f4cb8ef78594b738b235f3"
  },
  {
    "url": "images/eclipse.jpg",
    "revision": "aa3052deb5c1fc781496d770df9b8f52"
  },
  {
    "url": "images/eclipse.png",
    "revision": "84ff97bd4624d5dc3a40bd7430bc01e3"
  },
  {
    "url": "images/editorconfig.png",
    "revision": "5272f2d9b51220f02837fd5b975b263d"
  },
  {
    "url": "images/edx.jpg",
    "revision": "6bc186e72796bd7018b7617101c33a5b"
  },
  {
    "url": "images/egghead.png",
    "revision": "f148dae29193b9e76328372150294513"
  },
  {
    "url": "images/electron.svg",
    "revision": "b1429940d1511c93bfcfaf28ae32a80a"
  },
  {
    "url": "images/elm.png",
    "revision": "06967627a7d7b3451271d2981ff41b57"
  },
  {
    "url": "images/embedded_os.jpg",
    "revision": "1b9f0329208f9195df7b1b4d8603a0fc"
  },
  {
    "url": "images/emberjs.jpeg",
    "revision": "3647621e0fd551472fcecd7ddb866db6"
  },
  {
    "url": "images/emberjs.png",
    "revision": "01c4f44377a1b001fe71ac22aff41416"
  },
  {
    "url": "images/emmet.png",
    "revision": "96d7b2a534fea7780102e119817fe327"
  },
  {
    "url": "images/episerver.jpg",
    "revision": "2f9820ef42ab9d6d300f00111f680280"
  },
  {
    "url": "images/eric-elliott.jpeg",
    "revision": "a2517c4c12007111c1b61ce7c3b426d1"
  },
  {
    "url": "images/esdoc.png",
    "revision": "4dd54e59b222b3f2cb09209339d4d610"
  },
  {
    "url": "images/eslint.svg",
    "revision": "b036d7fbdac3c0c384b2d605e2678746"
  },
  {
    "url": "images/ett.png",
    "revision": "09b239d225ef63825b3675df970c6b45"
  },
  {
    "url": "images/eyeautomate.png",
    "revision": "2d63512022dcb63e705e8010189e806c"
  },
  {
    "url": "images/fe-news.png",
    "revision": "599a3c02b550e9a4cfa687e5b0de7275"
  },
  {
    "url": "images/flow-typed.jpg",
    "revision": "07329f93a2968bb26a2bf45f64378871"
  },
  {
    "url": "images/flux.png",
    "revision": "54458022636c61d87d61f3c4d04eea03"
  },
  {
    "url": "images/folktale.png",
    "revision": "756bb59f6d59178e57fb6fc1a7038f09"
  },
  {
    "url": "images/fractal.png",
    "revision": "ce5d3a7b1abfad7f178745db0808a10b"
  },
  {
    "url": "images/freemarker.png",
    "revision": "b59ae714f1c09dad257357619fa6a455"
  },
  {
    "url": "images/frontend-masters.jpg",
    "revision": "bc397f0da7bcf92445848d89cfed6075"
  },
  {
    "url": "images/fyra.jpg",
    "revision": "d0c87285e02099fa934550d49a517eb2"
  },
  {
    "url": "images/galen-framework.png",
    "revision": "ba979b06879d9b06b16c8f3b77ae442c"
  },
  {
    "url": "images/git.png",
    "revision": "61fe3c7650b94615d83d5de02de68b76"
  },
  {
    "url": "images/github-desktop.svg",
    "revision": "32fc033c3ab08c439a52348e92786ef2"
  },
  {
    "url": "images/github.png",
    "revision": "ae0970f05d36329ba9ab650d0512bae7"
  },
  {
    "url": "images/gitkraken.jpg",
    "revision": "c2c5052da961f4e39793c91740c29186"
  },
  {
    "url": "images/gitlab.png",
    "revision": "c5ff7de7fbbfb7fe1f7a939dfbc75f35"
  },
  {
    "url": "images/gogs.jpg",
    "revision": "0d0ef0e79eeeabaf161a6994346315f4"
  },
  {
    "url": "images/google-analytics.png",
    "revision": "81bb33fe662a1348d4f778b521b3dc2c"
  },
  {
    "url": "images/google-cloud-platform.jpg",
    "revision": "133ec1effb55dca8f43e9bbc98575d9a"
  },
  {
    "url": "images/google-cloud.png",
    "revision": "f51d99fd9a8ce08503be78b8057de287"
  },
  {
    "url": "images/google-guava.jpg",
    "revision": "479130fa21a31b3f70b3111ff1408c8b"
  },
  {
    "url": "images/googletest.png",
    "revision": "53d79bdd1dcdb7936fb88665faa7b3ce"
  },
  {
    "url": "images/gradle.png",
    "revision": "9fb0578836e3af171c5a1525089b238d"
  },
  {
    "url": "images/greenkeeper.png",
    "revision": "e1ae122472b283fca2fa3d17054b1627"
  },
  {
    "url": "images/grunt.png",
    "revision": "bb93815ed7527fb1444cff20023cf531"
  },
  {
    "url": "images/gulp.png",
    "revision": "1089550d4192d45c6f6266045e65a0f3"
  },
  {
    "url": "images/hadoop.jpeg",
    "revision": "a4b2dd1ad45d3ee8b282d9f26c5b06c1"
  },
  {
    "url": "images/handlebars.png",
    "revision": "fca0c6e66bbedc87ecb9fd93b3dbe9a9"
  },
  {
    "url": "images/hibernate.svg",
    "revision": "d846ddfd4741b5666e322e2a5ee4afd5"
  },
  {
    "url": "images/hp.png",
    "revision": "299ef1a5274d4a98153e0bfd4caee02e"
  },
  {
    "url": "images/html5.jpg",
    "revision": "18e8e5b70c987fb5aa05a5559270ea99"
  },
  {
    "url": "images/immutable.png",
    "revision": "fe02e40f05fed275722ebfef7e5d1782"
  },
  {
    "url": "images/inferno.png",
    "revision": "423fe61f7a841076fa677960f7b878a2"
  },
  {
    "url": "images/insomnia.jpg",
    "revision": "ebb20fc145775712503d9f047f7cc339"
  },
  {
    "url": "images/intellij.png",
    "revision": "bdf49052dd79aa1e1fc2270a02ba783c"
  },
  {
    "url": "images/inuitcss.png",
    "revision": "56809efd51670e816971f3428bda760b"
  },
  {
    "url": "images/ionic.png",
    "revision": "0b897dc5c924917c59cc62e9334b7622"
  },
  {
    "url": "images/itcss.png",
    "revision": "8254b528b2954d7a8f4a9266d61defdf"
  },
  {
    "url": "images/jade.png",
    "revision": "a030b1e0b7d2c9839bed7b6289ee6f5b"
  },
  {
    "url": "images/jasmine.png",
    "revision": "d27b85005e69224b34e01fc61d3cd41f"
  },
  {
    "url": "images/java.png",
    "revision": "1cf43f6ba5cbc71b4b2d040f2a358f3e"
  },
  {
    "url": "images/jboss.jpg",
    "revision": "161cf42ad2bdc39a83a4051cef0c291f"
  },
  {
    "url": "images/jekyll.jpg",
    "revision": "7c9ac51354b6890320c9807ced0df6aa"
  },
  {
    "url": "images/jenkins.jpg",
    "revision": "4062e2959d71bd7a5faf005bf2442a77"
  },
  {
    "url": "images/jenkins.png",
    "revision": "eb7f7bdb564d6775cb8dcbe0a96ba633"
  },
  {
    "url": "images/jeremy-keith.jpg",
    "revision": "e53c2c6b7b621052428fad0812bf293d"
  },
  {
    "url": "images/jest.png",
    "revision": "e59bd0cf563b241a7c48fe5272498c85"
  },
  {
    "url": "images/jira.jpg",
    "revision": "cb7cc62d9c4d967638b19d736ad0d285"
  },
  {
    "url": "images/jquery.gif",
    "revision": "9999c1a8c347b81c5cb5df967664c4c3"
  },
  {
    "url": "images/js.png",
    "revision": "97f39425fe7ff5ffe1b53467e2c8b081"
  },
  {
    "url": "images/jsdoc.png",
    "revision": "55ac3952ecb1ba09e21d5c54766489bf"
  },
  {
    "url": "images/jsfiddle.png",
    "revision": "1663aa377120b3ee56822fc19d851278"
  },
  {
    "url": "images/json.png",
    "revision": "67c28e1c655cc02f521a8a27940ed85b"
  },
  {
    "url": "images/jspm.png",
    "revision": "d2cb78032e836c444d405e389c6c3252"
  },
  {
    "url": "images/junit.png",
    "revision": "18df7bccd421c46b9587fcb0f25b30b1"
  },
  {
    "url": "images/kanban.jpg",
    "revision": "70eac851caa3614510852a5e6713eeb6"
  },
  {
    "url": "images/karma.png",
    "revision": "0a46fcc52722a7f83f3a853aa5bad0f7"
  },
  {
    "url": "images/keystonejs.png",
    "revision": "7089443636974823d1aee81abd1c7db8"
  },
  {
    "url": "images/kss.png",
    "revision": "2779b616d14b8099781ac2fead838783"
  },
  {
    "url": "images/less.jpeg",
    "revision": "828b926de8013f07ff620485db8b6891"
  },
  {
    "url": "images/lighthouse.jpg",
    "revision": "827fec35ba02943f588231fa4c5a1951"
  },
  {
    "url": "images/linux.png",
    "revision": "94ce908df37a652f20167cfd26b288f1"
  },
  {
    "url": "images/lodash.png",
    "revision": "a2451a43b6e2a8f51e9638788e80311d"
  },
  {
    "url": "images/luke-wroblewski.jpg",
    "revision": "6b32f20b02df27c000bef215c57dc807"
  },
  {
    "url": "images/magnolia.png",
    "revision": "2bfed9103dda7b51da86b7fe05318382"
  },
  {
    "url": "images/markdown.png",
    "revision": "ff65ea0a2a3487f887361b544855af6d"
  },
  {
    "url": "images/materialize.png",
    "revision": "da54f066f007d3f1c2b33797ccb1cb4b"
  },
  {
    "url": "images/maven.png",
    "revision": "edc984f3b4766773f987fda868f7273c"
  },
  {
    "url": "images/mercurial.png",
    "revision": "a22d2ace6ebced98236b97257d4e2d19"
  },
  {
    "url": "images/mitocw.png",
    "revision": "e38bfdacd0f53ddad79612d8a7c93745"
  },
  {
    "url": "images/mobx.png",
    "revision": "1e58fcaaf6f6334a2a8e0937e98cf92c"
  },
  {
    "url": "images/mocha.png",
    "revision": "cbe51311de901213cb1f826b35e89432"
  },
  {
    "url": "images/mocking.png",
    "revision": "c3e02dff654f7f00e4a3f31eaf31d1dd"
  },
  {
    "url": "images/mockito.jpg",
    "revision": "3ba30d78f01c87e8fc8feb706b7a48d7"
  },
  {
    "url": "images/mongodb.png",
    "revision": "4d40a0e9f8ba3b5716a415bdb9d0e950"
  },
  {
    "url": "images/mulesoft.png",
    "revision": "6fccd6373d5e9f6e64418b9508d867a0"
  },
  {
    "url": "images/mustache.png",
    "revision": "1d1c125c19677106901d0aef7c0e23b9"
  },
  {
    "url": "images/nightmarejs.svg",
    "revision": "6e1c77c0476a8ac6bcd902e86779e08f"
  },
  {
    "url": "images/nodejs.png",
    "revision": "5062b5479e5aa9afffd1ff5d0b0682e2"
  },
  {
    "url": "images/noll.jpg",
    "revision": "b3355635f2d2edf54cb417bf1ea2ebca"
  },
  {
    "url": "images/npm-trends.png",
    "revision": "1db820a4962cabccde5fcd99ba6952f8"
  },
  {
    "url": "images/npm.png",
    "revision": "be1adde6962bf9d8d0f274927a434ded"
  },
  {
    "url": "images/nuget.png",
    "revision": "f1018086fb580e38c963884dab856ba3"
  },
  {
    "url": "images/objectorientedprogramming.jpg",
    "revision": "c5c29df5a26286d98a87c1ba05f7ec3c"
  },
  {
    "url": "images/offline-first.png",
    "revision": "2636a7cef899589874c09dadac09d7ad"
  },
  {
    "url": "images/orchard.png",
    "revision": "8518da950a84ff4f2cc6bd757a1b1bd7"
  },
  {
    "url": "images/orde-sauders.png",
    "revision": "76e26cd334dd8a3f2b55db7057892e3a"
  },
  {
    "url": "images/osgi.png",
    "revision": "706658a549a5dcb537b4efbffb869cff"
  },
  {
    "url": "images/phantomcss.png",
    "revision": "c90ecddeebe63a00e2960e7de439cd8a"
  },
  {
    "url": "images/phantomjs.png",
    "revision": "1133785a96fb1e8e790c3d50fa62fd7b"
  },
  {
    "url": "images/phonegap.png",
    "revision": "5f07b0ee9299b0046b5c9739d5bd4bad"
  },
  {
    "url": "images/piwik.png",
    "revision": "cc98e7b3265e7454ecacee55342f9575"
  },
  {
    "url": "images/plunker.png",
    "revision": "bbe0547090503be61d60ccd8e2839c61"
  },
  {
    "url": "images/pluralsight.jpg",
    "revision": "c8a177e05518e29ba69d166ec7c37cb6"
  },
  {
    "url": "images/polyfill.jpg",
    "revision": "f115e9877614b1d2b1e8a0b596c77d28"
  },
  {
    "url": "images/postcss.svg",
    "revision": "1681ce81bec9548f6dc507b5e4a85a36"
  },
  {
    "url": "images/postman.jpg",
    "revision": "43c396b8c235a73c4a83935c531c5fda"
  },
  {
    "url": "images/preact.jpg",
    "revision": "f21aa8ddd70e1e222d898d4918c5eb8e"
  },
  {
    "url": "images/projectmanagement.jpg",
    "revision": "b35cc99e8f6ac70607c4bfc47c65ea90"
  },
  {
    "url": "images/protractor.png",
    "revision": "baa55b70b61495c1855b226e2ad8de86"
  },
  {
    "url": "images/pug.svg",
    "revision": "6d1215dca2eaec7ae0221d6f6d9580a4"
  },
  {
    "url": "images/purescript.png",
    "revision": "a95fa468ac20bffd66d2ad7528f6bb22"
  },
  {
    "url": "images/pwa-wide.svg",
    "revision": "e23c2d4339b969e1a312a89b7dae1489"
  },
  {
    "url": "images/pwa.svg",
    "revision": "e23c2d4339b969e1a312a89b7dae1489"
  },
  {
    "url": "images/python.jpg",
    "revision": "02db56c55111ca5d8ed299e3a165add6"
  },
  {
    "url": "images/qunit.png",
    "revision": "38d9b70e3d36c251908e66c3367a313a"
  },
  {
    "url": "images/quokka.png",
    "revision": "930a60922ce0e386712666e721e02988"
  },
  {
    "url": "images/ramda.png",
    "revision": "431da6b13b159db7a0164f6448c778f1"
  },
  {
    "url": "images/rd-news.png",
    "revision": "04c9d62ad79d60e413583a8243b6205b"
  },
  {
    "url": "images/react.jpg",
    "revision": "b29c69f304bab48a0888a8ce94829a76"
  },
  {
    "url": "images/realtimeprogramming.jpg",
    "revision": "0ed133b9afd6b403319a6e0479c0b8cd"
  },
  {
    "url": "images/redux-observable.png",
    "revision": "cd215f08426a94f35eafcf43784df1cf"
  },
  {
    "url": "images/redux-saga.png",
    "revision": "5436996658151e829c7abc19bade50d8"
  },
  {
    "url": "images/redux.png",
    "revision": "4f0bf09cc0011afa6acacfee7f645d0a"
  },
  {
    "url": "images/reqtest.png",
    "revision": "fc5bb00108bd3310315d6208101f2345"
  },
  {
    "url": "images/requirejs.png",
    "revision": "58feed7a50d5dbe5d66d70bec1d22bd9"
  },
  {
    "url": "images/retire.png",
    "revision": "6a369b0b28551b71a933591bf7e3ba71"
  },
  {
    "url": "images/riot.jpg",
    "revision": "d03b36be9529426f0552385a36cd0d1a"
  },
  {
    "url": "images/rollup.jpg",
    "revision": "e66aea46b8c9e628a2e38e24479b4c29"
  },
  {
    "url": "images/rx.png",
    "revision": "a581c6cf6800844ca3eadbfbbdfcab02"
  },
  {
    "url": "images/sanctuary.png",
    "revision": "62f7a6a145cc8d991f0d512ba38b3b92"
  },
  {
    "url": "images/sass.jpg",
    "revision": "0b44e5324fe6dcd6974d38805f659aff"
  },
  {
    "url": "images/sassmeister.jpg",
    "revision": "3906a35412827f5942ddf559a3c21a42"
  },
  {
    "url": "images/saucelabs.jpg",
    "revision": "6761228569b937994f2f3c9c72208e2c"
  },
  {
    "url": "images/scala.png",
    "revision": "3f60636f36036ff02998f55f9c88832f"
  },
  {
    "url": "images/scripting.png",
    "revision": "d18a714f53076b2c8716a4978da5e50d"
  },
  {
    "url": "images/scrum.png",
    "revision": "5f8731a7a71cba5ea4a5e963f5a9b9d1"
  },
  {
    "url": "images/selenide.png",
    "revision": "01d0cb0748f0c83d22f4668f8f51c408"
  },
  {
    "url": "images/selenium.png",
    "revision": "8f2df9d27f3d382a2cc8a8dcfae28440"
  },
  {
    "url": "images/sigma-logo-alt.png",
    "revision": "f1b952b34e3f5e5073a5c69915469103"
  },
  {
    "url": "images/sigma-logo.png",
    "revision": "ebe9085e985a122061830ff2459f152e"
  },
  {
    "url": "images/sinon.png",
    "revision": "a6431d496a579d7f4472cb395bfb286c"
  },
  {
    "url": "images/sitespeed.io.png",
    "revision": "835e6dbca35c5aad395ca4f630ee2e0b"
  },
  {
    "url": "images/slimerjs.png",
    "revision": "76104731324a25c9b1da0cc0d8a01442"
  },
  {
    "url": "images/smacss.jpg",
    "revision": "7e79d1da12df46eb6fa6e96e26489e81"
  },
  {
    "url": "images/soapui.png",
    "revision": "5ff60b6c712d5d90e1cd3c678a74824d"
  },
  {
    "url": "images/softwarearchitecture.jpg",
    "revision": "bd67cc27fc5238f7e8e2fdf4dbc42883"
  },
  {
    "url": "images/solid.jpg",
    "revision": "3608af22cab3daced89f2f8b1049ec1c"
  },
  {
    "url": "images/source-tree.png",
    "revision": "216ff528755a8c9d8d9b2bfcdbd01ace"
  },
  {
    "url": "images/spring-boot.jpg",
    "revision": "2616d25baee5c9fbe8661b37948a2c18"
  },
  {
    "url": "images/spring.png",
    "revision": "5117bfad251d89c55f931571e2a2225f"
  },
  {
    "url": "images/sql.png",
    "revision": "35fedf1eb2d39c0670ea61e69f187c29"
  },
  {
    "url": "images/stacktracejs.png",
    "revision": "a5c463c2de6dfbbb15c49d74d1c00db1"
  },
  {
    "url": "images/standardjs.jpg",
    "revision": "1cc1f67414f4edb942fd577bb5f00f2c"
  },
  {
    "url": "images/stylelint.png",
    "revision": "772a8ff21cb154416d63c0984e0bc270"
  },
  {
    "url": "images/stylus.png",
    "revision": "d132dd01a93cfb6d30b80bb9154e1e51"
  },
  {
    "url": "images/sublime-text.png",
    "revision": "2027005b33d8f2009a1df8af631ee30e"
  },
  {
    "url": "images/suitcss.png",
    "revision": "e54d7a8fb066ca2336c2eb343e284142"
  },
  {
    "url": "images/telecom.png",
    "revision": "f6e4a367faaf506528777a6d9360f693"
  },
  {
    "url": "images/testcafe.jpg",
    "revision": "1882c47a20d72543084c4dd1fece3351"
  },
  {
    "url": "images/testdrivendevelopment.jpg",
    "revision": "5e502df4caff06e29688b6d535867f52"
  },
  {
    "url": "images/textmate.png",
    "revision": "2958bd58b98fb517326a2496e9deeca2"
  },
  {
    "url": "images/tomcat.jpg",
    "revision": "fd034dd99bd8f019dfe318c92e7ad045"
  },
  {
    "url": "images/travis.png",
    "revision": "cbe5c6adbd321a6f5a58e3dd12818fd1"
  },
  {
    "url": "images/tre.png",
    "revision": "ec70017523b4c953e5ca948a5fbdceaa"
  },
  {
    "url": "images/treehouse.png",
    "revision": "27b53c57727565e869f535633e0e350e"
  },
  {
    "url": "images/tslint.png",
    "revision": "9d9570e327bde6ff3c9af5afe8d2b406"
  },
  {
    "url": "images/tva.png",
    "revision": "04f09065fb33f855c4ccd0ce2279171b"
  },
  {
    "url": "images/typescript.png",
    "revision": "057ec7028006f3080c9a7783480d007a"
  },
  {
    "url": "images/udacity.jpg",
    "revision": "d71a6378ec448b1d526b45ca849ae2ce"
  },
  {
    "url": "images/udacity.png",
    "revision": "b02320e3fd9d5751eeb8bc2a4b8b0d05"
  },
  {
    "url": "images/udemy.png",
    "revision": "3abd59feb0dbc7577c394a065471d5ba"
  },
  {
    "url": "images/uml.png",
    "revision": "2c59cd5c25d4ffde08949b8944d8f5b1"
  },
  {
    "url": "images/unittest.png",
    "revision": "e44a48dbd95f2315af110593bb915dbb"
  },
  {
    "url": "images/vagrant.png",
    "revision": "215adab9ff4fa8962df33dc69f17fa99"
  },
  {
    "url": "images/vavr.png",
    "revision": "15d1ab074ab0fa223b4a1e566f2ba9ed"
  },
  {
    "url": "images/visual-studio.jpg",
    "revision": "13fc010a1740fdfb933e1ce3fa1f75ba"
  },
  {
    "url": "images/visual-studio.png",
    "revision": "494e836b075153c5225e2d50967e9365"
  },
  {
    "url": "images/vs-code.png",
    "revision": "7fa88387c2d370697db89c194195ccc9"
  },
  {
    "url": "images/vue.png",
    "revision": "7dfb4d8c657a307fb396c86ade6d7d5e"
  },
  {
    "url": "images/w3c.png",
    "revision": "9cafb3eb025441fe78d5d0151a2b73c6"
  },
  {
    "url": "images/wallaby.png",
    "revision": "262f9b7daadf432ebcbdec9bb84e79f2"
  },
  {
    "url": "images/webdriverio.png",
    "revision": "5b0cddee064bf5f76b15869b8691ce0d"
  },
  {
    "url": "images/weblogic.gif",
    "revision": "d7a8af7b915d82494d963aed651c54f5"
  },
  {
    "url": "images/webpack.svg",
    "revision": "b08916f341839041bb8a5d07051ef13c"
  },
  {
    "url": "images/websphere.png",
    "revision": "3f3bf83502694e6478ef6656d668a581"
  },
  {
    "url": "images/webstorm.png",
    "revision": "28526bda2c70ab274e46a203e78afda0"
  },
  {
    "url": "images/wildfly.png",
    "revision": "0a89ad70f47aa4eea534fb9013dbd970"
  },
  {
    "url": "images/windows.png",
    "revision": "6a1b1b60963e4bbddf88214dcd62e56b"
  },
  {
    "url": "images/wordpress.png",
    "revision": "fa6246e61ab37a8400b3d035ec1f82f3"
  },
  {
    "url": "images/wraith.png",
    "revision": "d7ab3dd6db5d90beb239ae03678c63cc"
  },
  {
    "url": "images/xamarin.png",
    "revision": "f4102496022c11dc995d98b28744a422"
  },
  {
    "url": "images/xml.png",
    "revision": "7bce28c805e8b7665fbbeb93336255b4"
  },
  {
    "url": "images/yaml.gif",
    "revision": "e7f1ca297e9eca466ec329ee2c27c1c2"
  },
  {
    "url": "images/yarn.png",
    "revision": "7b2c34bc87106ff96325c5414c56c4a4"
  },
  {
    "url": "images/yellow-lab-tools.png",
    "revision": "58fdc03c9e335cd0932fee4ce1f4b438"
  },
  {
    "url": "images/yeoman.png",
    "revision": "f0463d61af7faa9fbc3ba159944249da"
  },
  {
    "url": "images/youtube.jpg",
    "revision": "16e3cf37a003841b2f6ab1c8efdaad55"
  },
  {
    "url": "images/zurb-foundation.jpg",
    "revision": "6303984afedc19cef1518456a8c587df"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
