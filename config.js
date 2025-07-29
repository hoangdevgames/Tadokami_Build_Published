// WebGL Template Configuration
// Tất cả config được tập trung tại đây để dễ quản lý
// 
// Cách sử dụng:
// - LIFF config: window.GameConfig.liff
// - Firebase config: window.GameConfig.firebase  
// - Game info: window.GameConfig.game
// - Build paths: window.GameConfig.build
//
// Để thay đổi config, chỉ cần sửa file này và không cần rebuild Unity
window.GameConfig = {
    liff: {
        liffId: "2007739330-o6yN0LLG",
        withLoginOnExternalBrowser: true
    },
    firebase: {
        apiKey: "AIzaSyCEot6AbBMm2Bi7I0mFFbU7vMWYtkUHnhU",
        authDomain: "tadokami-alpha-82264.firebaseapp.com",
        projectId: "tadokami-alpha-82264",
        storageBucket: "tadokami-alpha-82264.firebasestorage.app",
        messagingSenderId: "993427715124",
        appId: "1:993427715124:web:942bdd80e622c6ee980661",
        measurementId: "G-H86CKX7QL9"
    },
    game: {
        productName: "AutoRPGAdventure",
        companyName: "DefaultCompany"
    },
    build: {
        dataUrl: "Build/Tadokami_Build.data",
        frameworkUrl: "Build/Tadokami_Build.framework.js",
        codeUrl: "Build/Tadokami_Build.wasm",
        streamingAssetsUrl: "StreamingAssets"
    }
}; 
