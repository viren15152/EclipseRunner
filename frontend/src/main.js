import { Application, Assets, Sprite } from 'pixi.js';

async function init() {
    try {
        const app = new Application();
        await app.init({
            background: '#000000',
            width: 800,
            height: 600
        });

        document.body.appendChild(app.canvas);
        console.log("✅ Pixi.js Initialized Successfully");

        const assets = {
            background: "/assets/images/backgrounds/background.png",
            structures: "/assets/images/backgrounds/back-structures.png",
            tileset: "/assets/images/backgrounds/tileset.png"  // Updated Path
        };

        // Load assets
        const resources = await Assets.load(Object.values(assets));
        console.log("✅ Loaded Resources:", resources);

        // Add Background
        const background = new Sprite(resources[assets.background]);
        background.width = app.screen.width;
        background.height = app.screen.height;
        app.stage.addChild(background);

        // Add Structures
        const structures = new Sprite(resources[assets.structures]);
        structures.width = app.screen.width;
        structures.height = app.screen.height;
        app.stage.addChild(structures);

        // Add Tileset
        const tileset = new Sprite(resources[assets.tileset]);
        tileset.width = app.screen.width;
        tileset.height = app.screen.height;
        app.stage.addChild(tileset);

    } catch (error) {
        console.error("🚨 Error initializing Pixi.js:", error);
    }
}

init().catch(console.error);







