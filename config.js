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
        apiKey: "AIzaSyBTC3MPiDICYYAO8bTbZ0c_44yPoJjFjq8",
        authDomain: "tadokami-line.firebaseapp.com",
        projectId: "tadokami-line",
        storageBucket: "tadokami-line.firebasestorage.app",
        messagingSenderId: "812391039700",
        appId: "1:812391039700:web:fb766775fa0a1618b67141",
        measurementId: "G-KNHWS1NYET"
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
