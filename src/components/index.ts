import type { TComponentManifest } from '@/@types/components';

const manifest: TComponentManifest = {
    editor: {
        path: 'editor',
        name: 'Editor',
        desc: 'Code editor for programs',
        definition: {
            dependencies: {
                optional: ['menu'],
                required: [],
            },
            flags: {},
            strings: {
                'editor.build': 'build button - build the program',
                'editor.help': 'help button - show syntax information',
            },
            assets: [
                'image.icon.build',
                'image.icon.help',
                'image.icon.pin',
                'image.icon.unpin',
                'image.icon.code',
                'image.icon.close',
            ],
        },
    },
    menu: {
        path: 'menu',
        name: 'Menu',
        desc: 'Menubar of the Primary Toolbar',
        definition: {
            dependencies: {
                optional: [],
                required: [],
            },
            flags: {
                uploadFile: 'boolean',
                recording: 'boolean',
                exportDrawing: 'boolean',
                loadProject: 'boolean',
                saveProject: 'boolean',
            },
            strings: {
                'menu.run': 'run button - to start the program execution',
                'menu.stop': 'stop button - to stop the program execution',
                'menu.reset': 'reset button - clear program states',
            },
            assets: [
                'image.icon.run',
                'image.icon.stop',
                'image.icon.reset',
                'image.icon.saveProjectHTML',
                'image.icon.exportDrawing',
                'image.icon.startRecording',
                'image.icon.stopRecording',
            ],
        },
    },
    painter: {
        path: 'painter',
        name: 'Painter',
        desc: 'Allows creation of artwork in the workspace',
        definition: {
            dependencies: {
                optional: ['menu'],
                required: [],
            },
            flags: {},
            strings: {},
            assets: [
                'image.icon.mouse',
                //
            ],
        },
    },
    singer: {
        path: 'singer',
        name: 'Singer',
        desc: 'Allows creation of music in the workspace',
        definition: {
            dependencies: {
                optional: ['menu'],
                required: [],
            },
            flags: {},
            strings: {},
            assets: [],
        },
    },
};

export default manifest;
