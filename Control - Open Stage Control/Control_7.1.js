[
    {
        "type": "root",
        "tabs": [
            {
                "id": "tab_1",
                "label": "MIXER",
                "widgets": [
                    {
                        "type": "strip",
                        "top": "0%",
                        "left": "0%",
                        "id": "CH1",
                        "label": "auto",
                        "width": "12.5%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/CH1/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/CH1/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH1/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH1/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/CH1/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH1/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "CH1",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH1/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH1/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": 0,
                        "left": "12.5%",
                        "id": "CH2",
                        "label": "auto",
                        "width": "12.5%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/CH2/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/CH2/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH2/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH2/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/CH2/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH2/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "CH2",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH2/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH2/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": 0,
                        "left": "25%",
                        "id": "CH3",
                        "label": "auto",
                        "width": "12.5%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/CH3/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/CH3/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH3/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH3/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/CH3/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH3/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "CH3",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH3/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH3/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": 0,
                        "left": "37.5%",
                        "id": "CH4",
                        "label": "auto",
                        "width": "12.5%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/CH4/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/CH4/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH4/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH4/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/CH4/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH4/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "CH4",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH4/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH4/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": 0,
                        "left": "50%",
                        "id": "CH5",
                        "label": "auto",
                        "width": "12.5%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/CH5/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/CH5/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH5/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH5/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/CH5/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH5/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "CH5",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH5/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH5/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": "0%",
                        "left": "62.5%",
                        "id": "CH6",
                        "label": "auto",
                        "width": "12.5%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/CH6/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/CH6/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH6/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH6/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/CH6/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH6/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "CH6",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH6/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH6/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": "0%",
                        "left": "75%",
                        "id": "CH7",
                        "label": "auto",
                        "width": "12.5%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/CH7/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/CH7/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH7/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH7/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/CH7/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH7/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "CH7",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH7/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH7/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": "0%",
                        "left": "87.5%",
                        "id": "CH8",
                        "label": "auto",
                        "width": "12.5%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/CH8/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/CH8/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH8/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH8/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/CH8/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH8/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "CH8",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/CH8/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/CH8/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    }
                ],
                "type": "tab",
                "color": "auto",
                "css": "",
                "layout": "",
                "spacing": 0,
                "value": "",
                "precision": 0,
                "address": "/tab_1",
                "preArgs": [],
                "target": [],
                "variables": "@{parent.variables}",
                "tabs": [],
                "scroll": true
            },
            {
                "id": "tab_2",
                "label": "CHANNELS",
                "tabs": [
                    {
                        "id": "tab_3",
                        "label": "CH1",
                        "tabs": [
                            {
                                "id": "tab_4",
                                "label": "CONFIG + AUX",
                                "widgets": [
                                    {
                                        "type": "strip",
                                        "top": "0%",
                                        "left": "0%",
                                        "id": "CH1",
                                        "label": "auto",
                                        "width": "20%",
                                        "horizontal": false,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "id": "/CH1/pan",
                                                "linkId": "",
                                                "label": "PAN",
                                                "unit": "",
                                                "height": "20%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "L": -45
                                                    },
                                                    "max": {
                                                        "R": 45
                                                    }
                                                },
                                                "origin": 0,
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "address": "/CH1/pan",
                                                "preArgs": [],
                                                "target": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "id": "/CH1/fader",
                                                "linkId": "",
                                                "unit": "",
                                                "height": "80%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "snap": true,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-54": 46
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-24": 76
                                                    },
                                                    "50%": {
                                                        "-12": 88
                                                    },
                                                    "62.5%": {
                                                        "-6": 94
                                                    },
                                                    "75%": {
                                                        "0": 100
                                                    },
                                                    "87.5%": {
                                                        "+6": 106
                                                    },
                                                    "max": {
                                                        "+12": 112
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH1/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "label": "CH1",
                                                "value": "",
                                                "css": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "height": "100%",
                                        "scroll": true,
                                        "stretch": false,
                                        "border": true,
                                        "spacing": 0,
                                        "variables": "@{parent.variables}",
                                        "_style": "style",
                                        "_children": "children",
                                        "_geometry": "geometry",
                                        "_panel": "panel",
                                        "layout": "",
                                        "value": "",
                                        "_osc": "osc",
                                        "precision": 0,
                                        "address": "auto",
                                        "preArgs": [],
                                        "target": [],
                                        "tabs": []
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "35%",
                                        "id": "/CH1/GROUPS",
                                        "label": "GROUPS ASSIGN",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH1/G12/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 12",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH1/G12/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "20%",
                                                "left": "0%",
                                                "id": "/CH1/G34/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 34",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH1/G34/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "40%",
                                                "left": "0%",
                                                "id": "/CH1/G56/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 56",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH1/G56/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "60%",
                                                "left": "0%",
                                                "id": "/CH1/G78/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 78",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH1/G78/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "80%",
                                                "left": "0%",
                                                "id": "/CH1/L-R/assign-bus",
                                                "linkId": "",
                                                "label": "BUS MASTER",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH1/L-R/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "height": "20%",
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH1/GROUPS",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "50%",
                                        "id": "/CH1/AUX-BUSES",
                                        "label": "AUX BUSES",
                                        "width": "50%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH1/aux/AUX1/fader",
                                                "linkId": "",
                                                "label": "AUX 1",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH1/aux/AUX1/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "25%",
                                                "id": "/CH1/aux/AUX2/fader",
                                                "label": "AUX 2",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH1/aux/AUX2/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "50%",
                                                "id": "/CH1/aux/AUX3/fader",
                                                "label": "AUX 3",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH1/aux/AUX3/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "75%",
                                                "id": "/CH1/aux/AUX4/fader",
                                                "label": "AUX 4",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH1/aux/AUX4/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH1/AUX-BUSES",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "20%",
                                        "id": "CH1",
                                        "label": " ",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "layout": "",
                                        "spacing": 0,
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": 0,
                                                "left": 0,
                                                "id": "/CH1/player",
                                                "linkId": "",
                                                "label": "ADC || PLAY",
                                                "height": "25%",
                                                "color": "green",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH1/player",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "25%",
                                                "left": "0%",
                                                "id": "/CH1/phase",
                                                "linkId": "",
                                                "label": "PHASE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "blue",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH1/phase",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "50%",
                                                "left": "0%",
                                                "id": "/CH1/solo",
                                                "linkId": "",
                                                "label": "SOLO",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "yellow",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH1/solo",
                                                "preArgs": [],
                                                "target": [],
                                                "css": "",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "75%",
                                                "left": 0,
                                                "id": "/CH1/mute",
                                                "linkId": "",
                                                "label": "MUTE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "red",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH1/mute",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "/CH1",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_4",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            },
                            {
                                "id": "tab_5",
                                "label": "EQ",
                                "widgets": [
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "0%",
                                        "id": "panel_1",
                                        "label": "Equalizer",
                                        "width": "100%",
                                        "height": "100%",
                                        "scroll": false,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "eq",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH1/eq_params/",
                                                "label": false,
                                                "width": "100%",
                                                "height": "50%",
                                                "color": "auto",
                                                "css": "",
                                                "rangeY": {
                                                    "min": -20,
                                                    "max": 20
                                                },
                                                "logScaleX": true,
                                                "preArgs": [],
                                                "resolution": 512,
                                                "origin": "auto",
                                                "address": "/CH1/eq_params/",
                                                "filters": [
                                                    {
                                                        "type": "highpass",
                                                        "freq": "/CH1/eq_params/hpfreq",
                                                        "q": "/CH1/eq_params/hpres",
                                                        "on": "/CH1/eq_params/hpactive"
                                                    },
                                                    {
                                                        "type": "lowshelf",
                                                        "freq": "/CH1/eq_params/lsfreq",
                                                        "gain": "/CH1/eq_params/lsgain",
                                                        "on": "/CH1/eq_params/lsactive"
                                                    },
                                                    {
                                                        "type": "peak",
                                                        "freq": "/CH1/eq_params/pk1freq",
                                                        "q": "/CH1/eq_params/pk1q",
                                                        "gain": "/CH1/eq_params/pk1gain",
                                                        "on": "/CH1/eq_params/pk1active"
                                                    },
                                                    {
                                                        "type": "peak",
                                                        "freq": "/CH1/eq_params/pk2freq",
                                                        "q": "/CH1/eq_params/pk2q",
                                                        "gain": "/CH1/eq_params/pk2gain",
                                                        "on": "/CH1/eq_params/pk2active"
                                                    },
                                                    {
                                                        "type": "peak",
                                                        "freq": "/CH1/eq_params/pk3freq",
                                                        "q": "/CH1/eq_params/pk3q",
                                                        "gain": "/CH1/eq_params/pk3gain",
                                                        "on": "/CH1/eq_params/pk3active"
                                                    },
                                                    {
                                                        "type": "highshelf",
                                                        "freq": "/CH1/eq_params/hsfreq",
                                                        "gain": "/CH1/eq_params/hsgain",
                                                        "on": "/CH1/eq_params/hsactive"
                                                    },
                                                    {
                                                        "type": "lowpass",
                                                        "freq": "/CH1/eq_params/lpfreq",
                                                        "q": "/CH1/eq_params/lpres",
                                                        "on": "/CH1/eq_params/lpactive"
                                                    }
                                                ],
                                                "pips": true,
                                                "smooth": false
                                            },
                                            {
                                                "id": "Band 1",
                                                "type": "strip",
                                                "label": "Highpass",
                                                "widgets": [
                                                    {
                                                        "id": "/CH1/eq_params/hpactive",
                                                        "type": "toggle",
                                                        "label": "ON",
                                                        "height": "16%",
                                                        "color": "auto",
                                                        "css": "",
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "linkId": "",
                                                        "on": 1,
                                                        "off": 0,
                                                        "target": [],
                                                        "address": "/CH1/eq_params/hpactive",
                                                        "value": "",
                                                        "doubleTap": false,
                                                        "led": false
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/hpfreq",
                                                        "label": "Frequency",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 20,
                                                            "25%": 150,
                                                            "50%": 400,
                                                            "75%": 4000,
                                                            "max": 10000
                                                        },
                                                        "unit": "Hz",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "linkId": "",
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/hpfreq",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/hpres",
                                                        "label": "Q",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 0.125,
                                                            "50%": 0.7,
                                                            "75%": 3.1,
                                                            "max": 8
                                                        },
                                                        "unit": "",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "linkId": "",
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": true,
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/hpres",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    }
                                                ],
                                                "left": 0,
                                                "top": "50%",
                                                "width": "14.3%",
                                                "height": "50%",
                                                "horizontal": false,
                                                "color": "auto",
                                                "css": "",
                                                "scroll": true,
                                                "stretch": false,
                                                "border": true,
                                                "spacing": 0,
                                                "variables": "@{parent.variables}",
                                                "_geometry": "geometry",
                                                "_style": "style",
                                                "_panel": "panel",
                                                "layout": "",
                                                "value": "",
                                                "_osc": "osc",
                                                "precision": 0,
                                                "address": "auto",
                                                "preArgs": [],
                                                "target": [],
                                                "_children": "children",
                                                "tabs": []
                                            },
                                            {
                                                "id": "Band 2",
                                                "type": "strip",
                                                "label": "Lowshelf",
                                                "widgets": [
                                                    {
                                                        "id": "/CH1/eq_params/lsactive",
                                                        "type": "toggle",
                                                        "label": "ON",
                                                        "height": "16%",
                                                        "color": "auto",
                                                        "css": "",
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "on": 1,
                                                        "off": 0,
                                                        "linkId": "",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/lsactive",
                                                        "value": "",
                                                        "doubleTap": false,
                                                        "led": false
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/lsfreq",
                                                        "label": "Frequency",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 20,
                                                            "12.5%": 100,
                                                            "25%": 500,
                                                            "50%": 2000,
                                                            "75%": 8000,
                                                            "max": 22000
                                                        },
                                                        "unit": "Hz",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/lsfreq",
                                                        "spring": false,
                                                        "value": 500,
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/lsslope",
                                                        "label": "Q",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 0.125,
                                                            "50%": 0.7,
                                                            "75%": 3.1,
                                                            "max": 8
                                                        },
                                                        "unit": "",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/lsslope",
                                                        "spring": false,
                                                        "value": 0.7,
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/lsgain",
                                                        "label": "Gain",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": -20,
                                                            "max": 20
                                                        },
                                                        "unit": "dB",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": 0,
                                                        "target": [],
                                                        "address": "/CH1/eq_params/lsgain",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    }
                                                ],
                                                "left": "14.3%",
                                                "top": "50%",
                                                "width": "14.3%",
                                                "height": "50%",
                                                "horizontal": false,
                                                "color": "auto",
                                                "css": "",
                                                "scroll": true,
                                                "stretch": false,
                                                "border": true,
                                                "spacing": 0,
                                                "variables": "@{parent.variables}",
                                                "_geometry": "geometry",
                                                "_style": "style",
                                                "_panel": "panel",
                                                "layout": "",
                                                "value": "",
                                                "_osc": "osc",
                                                "precision": 0,
                                                "address": "auto",
                                                "preArgs": [],
                                                "target": [],
                                                "_children": "children",
                                                "tabs": []
                                            },
                                            {
                                                "type": "strip",
                                                "label": "Peak 1",
                                                "widgets": [
                                                    {
                                                        "id": "/CH1/eq_params/pk1active",
                                                        "type": "toggle",
                                                        "label": "ON",
                                                        "height": "16%",
                                                        "color": "auto",
                                                        "css": "",
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "on": 1,
                                                        "off": 0,
                                                        "linkId": "",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk1active",
                                                        "value": "",
                                                        "doubleTap": false,
                                                        "led": false
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/pk1freq",
                                                        "label": "Frequency",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 20,
                                                            "12.5%": 100,
                                                            "25%": 500,
                                                            "50%": 2000,
                                                            "75%": 8000,
                                                            "max": 22000
                                                        },
                                                        "unit": "Hz",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk1freq",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/pk1q",
                                                        "label": "Q",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 0.125,
                                                            "max": 20
                                                        },
                                                        "unit": "",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk1q",
                                                        "spring": false,
                                                        "value": "",
                                                        "origin": "auto",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/pk1gain",
                                                        "label": "Gain",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": -20,
                                                            "max": 20
                                                        },
                                                        "unit": "dB",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": 0,
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk1gain",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    }
                                                ],
                                                "left": "28.6%",
                                                "top": "50%",
                                                "width": "14.3%",
                                                "height": "50%",
                                                "horizontal": false,
                                                "color": "auto",
                                                "css": "",
                                                "id": "Band 3",
                                                "scroll": true,
                                                "stretch": false,
                                                "border": true,
                                                "spacing": 0,
                                                "variables": "@{parent.variables}",
                                                "_geometry": "geometry",
                                                "_style": "style",
                                                "_panel": "panel",
                                                "layout": "",
                                                "value": "",
                                                "_osc": "osc",
                                                "precision": 0,
                                                "address": "auto",
                                                "preArgs": [],
                                                "target": [],
                                                "_children": "children",
                                                "tabs": []
                                            },
                                            {
                                                "id": "Band 7",
                                                "type": "strip",
                                                "label": "Lowpass",
                                                "widgets": [
                                                    {
                                                        "id": "/CH1/eq_params/lpactive",
                                                        "type": "toggle",
                                                        "label": "ON",
                                                        "height": "16%",
                                                        "color": "auto",
                                                        "css": "",
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "on": 1,
                                                        "off": 0,
                                                        "linkId": "",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/lpactive",
                                                        "value": "",
                                                        "doubleTap": false,
                                                        "led": false
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/lpfreq",
                                                        "label": "Frequency",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 10000,
                                                            "max": 22000
                                                        },
                                                        "unit": "Hz",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/lpfreq",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/lpres",
                                                        "label": "Q",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 0.125,
                                                            "50%": 0.7,
                                                            "75%": 3.1,
                                                            "max": 8
                                                        },
                                                        "unit": "",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/lpres",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    }
                                                ],
                                                "left": "85.8%",
                                                "top": "50%",
                                                "width": "14.2%",
                                                "height": "50%",
                                                "horizontal": false,
                                                "color": "auto",
                                                "css": "",
                                                "scroll": true,
                                                "stretch": false,
                                                "border": true,
                                                "spacing": 0,
                                                "variables": "@{parent.variables}",
                                                "_geometry": "geometry",
                                                "_style": "style",
                                                "_panel": "panel",
                                                "layout": "",
                                                "value": "",
                                                "_osc": "osc",
                                                "precision": 0,
                                                "address": "auto",
                                                "preArgs": [],
                                                "target": [],
                                                "_children": "children",
                                                "tabs": []
                                            },
                                            {
                                                "type": "strip",
                                                "label": "Peak 3",
                                                "widgets": [
                                                    {
                                                        "id": "/CH1/eq_params/pk3active",
                                                        "type": "toggle",
                                                        "label": "ON",
                                                        "height": "16%",
                                                        "color": "auto",
                                                        "css": "",
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "on": 1,
                                                        "off": 0,
                                                        "linkId": "",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk3active",
                                                        "value": "",
                                                        "doubleTap": false,
                                                        "led": false
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/pk3freq",
                                                        "label": "Frequency",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 20,
                                                            "12.5%": 100,
                                                            "25%": 500,
                                                            "50%": 2000,
                                                            "75%": 8000,
                                                            "max": 22000
                                                        },
                                                        "unit": "Hz",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk3freq",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/pk3q",
                                                        "label": "Q",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 0.125,
                                                            "50%": 0.7,
                                                            "75%": 3.1,
                                                            "max": 8
                                                        },
                                                        "unit": "",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk3q",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/pk3gain",
                                                        "label": "Gain",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": -20,
                                                            "max": 20
                                                        },
                                                        "unit": "dB",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": 0,
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk3gain",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    }
                                                ],
                                                "left": "57.2%",
                                                "top": "50%",
                                                "width": "14.3%",
                                                "height": "50%",
                                                "horizontal": false,
                                                "color": "auto",
                                                "css": "",
                                                "id": "Band 5",
                                                "scroll": true,
                                                "stretch": false,
                                                "border": true,
                                                "spacing": 0,
                                                "variables": "@{parent.variables}",
                                                "_geometry": "geometry",
                                                "_style": "style",
                                                "_panel": "panel",
                                                "layout": "",
                                                "value": "",
                                                "_osc": "osc",
                                                "precision": 0,
                                                "address": "auto",
                                                "preArgs": [],
                                                "target": [],
                                                "_children": "children",
                                                "tabs": []
                                            },
                                            {
                                                "id": "Band 6",
                                                "type": "strip",
                                                "label": "Highshelf",
                                                "widgets": [
                                                    {
                                                        "id": "/CH1/eq_params/hsactive",
                                                        "type": "toggle",
                                                        "label": "ON",
                                                        "height": "16%",
                                                        "color": "auto",
                                                        "css": "",
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "on": 1,
                                                        "off": 0,
                                                        "linkId": "",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/hsactive",
                                                        "value": "",
                                                        "doubleTap": false,
                                                        "led": false
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/hsfreq",
                                                        "label": "Frequency",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 20,
                                                            "12.5%": 100,
                                                            "25%": 500,
                                                            "50%": 2000,
                                                            "75%": 8000,
                                                            "max": 22000
                                                        },
                                                        "unit": "Hz",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/hsfreq",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/hsslope",
                                                        "label": "Q",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 0.125,
                                                            "50%": 0.7,
                                                            "75%": 3.1,
                                                            "max": 8
                                                        },
                                                        "unit": "",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/hsslope",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/hsgain",
                                                        "label": "Gain",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": -20,
                                                            "max": 20
                                                        },
                                                        "unit": "dB",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": 0,
                                                        "target": [],
                                                        "address": "/CH1/eq_params/hsgain",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    }
                                                ],
                                                "left": "71.5%",
                                                "top": "50%",
                                                "width": "14.3%",
                                                "height": "50%",
                                                "horizontal": false,
                                                "color": "auto",
                                                "css": "",
                                                "scroll": true,
                                                "stretch": false,
                                                "border": true,
                                                "spacing": 0,
                                                "variables": "@{parent.variables}",
                                                "_geometry": "geometry",
                                                "_style": "style",
                                                "_panel": "panel",
                                                "layout": "",
                                                "value": "",
                                                "_osc": "osc",
                                                "precision": 0,
                                                "address": "auto",
                                                "preArgs": [],
                                                "target": [],
                                                "_children": "children",
                                                "tabs": []
                                            },
                                            {
                                                "type": "strip",
                                                "label": "Peak 2",
                                                "widgets": [
                                                    {
                                                        "id": "/CH1/eq_params/pk2active",
                                                        "type": "toggle",
                                                        "label": "ON",
                                                        "height": "16%",
                                                        "color": "auto",
                                                        "css": "",
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "on": 1,
                                                        "off": 0,
                                                        "linkId": "",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk2active",
                                                        "value": "",
                                                        "doubleTap": false,
                                                        "led": false
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/pk2freq",
                                                        "label": "Frequency",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 20,
                                                            "12.5%": 100,
                                                            "25%": 500,
                                                            "50%": 2000,
                                                            "75%": 8000,
                                                            "max": 22000
                                                        },
                                                        "unit": "Hz",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk2freq",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/pk2q",
                                                        "label": "Q",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": 0.125,
                                                            "50%": 0.7,
                                                            "75%": 3.1,
                                                            "max": 8
                                                        },
                                                        "unit": "",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": "auto",
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk2q",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    },
                                                    {
                                                        "id": "/CH1/eq_params/pk2gain",
                                                        "label": "Gain",
                                                        "type": "fader",
                                                        "range": {
                                                            "min": -20,
                                                            "max": 20
                                                        },
                                                        "unit": "dB",
                                                        "height": "28%",
                                                        "color": "auto",
                                                        "compact": true,
                                                        "css": "",
                                                        "snap": false,
                                                        "logScale": false,
                                                        "precision": 2,
                                                        "preArgs": [],
                                                        "alignRight": false,
                                                        "horizontal": true,
                                                        "meter": false,
                                                        "linkId": "",
                                                        "origin": 0,
                                                        "target": [],
                                                        "address": "/CH1/eq_params/pk2gain",
                                                        "spring": false,
                                                        "value": "",
                                                        "pips": true,
                                                        "input": true,
                                                        "dashed": false,
                                                        "doubleTap": false,
                                                        "touchAddress": "",
                                                        "meterAddress": ""
                                                    }
                                                ],
                                                "left": "42.9%",
                                                "top": "50%",
                                                "width": "14.3%",
                                                "height": "50%",
                                                "horizontal": false,
                                                "color": "auto",
                                                "css": "",
                                                "id": "Band 4",
                                                "scroll": true,
                                                "stretch": false,
                                                "border": true,
                                                "spacing": 0,
                                                "variables": "@{parent.variables}",
                                                "_geometry": "geometry",
                                                "_style": "style",
                                                "_panel": "panel",
                                                "layout": "",
                                                "value": "",
                                                "_osc": "osc",
                                                "precision": 0,
                                                "address": "auto",
                                                "preArgs": [],
                                                "target": [],
                                                "_children": "children",
                                                "tabs": []
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "/panel_1",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_5",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            }
                        ],
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_3",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "widgets": [],
                        "scroll": true
                    },
                    {
                        "id": "tab_6",
                        "label": "CH2",
                        "tabs": [
                            {
                                "id": "tab_7",
                                "label": "CONFIG + AUX",
                                "widgets": [
                                    {
                                        "type": "strip",
                                        "top": "0%",
                                        "left": "0%",
                                        "id": "CH2",
                                        "label": "auto",
                                        "width": "20%",
                                        "horizontal": false,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "id": "/CH2/pan",
                                                "linkId": "",
                                                "label": "PAN",
                                                "unit": "",
                                                "height": "20%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "L": -45
                                                    },
                                                    "max": {
                                                        "R": 45
                                                    }
                                                },
                                                "origin": 0,
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "address": "/CH2/pan",
                                                "preArgs": [],
                                                "target": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "id": "/CH2/fader",
                                                "linkId": "",
                                                "unit": "",
                                                "height": "80%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "snap": true,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-54": 46
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-24": 76
                                                    },
                                                    "50%": {
                                                        "-12": 88
                                                    },
                                                    "62.5%": {
                                                        "-6": 94
                                                    },
                                                    "75%": {
                                                        "0": 100
                                                    },
                                                    "87.5%": {
                                                        "+6": 106
                                                    },
                                                    "max": {
                                                        "+12": 112
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH2/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "label": "CH2",
                                                "value": "",
                                                "css": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "height": "100%",
                                        "scroll": true,
                                        "stretch": false,
                                        "border": true,
                                        "spacing": 0,
                                        "variables": "@{parent.variables}",
                                        "_style": "style",
                                        "_children": "children",
                                        "_geometry": "geometry",
                                        "_panel": "panel",
                                        "layout": "",
                                        "value": "",
                                        "_osc": "osc",
                                        "precision": 0,
                                        "address": "auto",
                                        "preArgs": [],
                                        "target": [],
                                        "tabs": []
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "35%",
                                        "id": "/CH2/GROUPS",
                                        "label": "GROUPS ASSIGN",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH2/G12/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 12",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH2/G12/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "20%",
                                                "left": "0%",
                                                "id": "/CH2/G34/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 34",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH2/G34/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "40%",
                                                "left": "0%",
                                                "id": "/CH2/G56/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 56",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH2/G56/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "60%",
                                                "left": "0%",
                                                "id": "/CH2/G78/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 78",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH2/G78/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "80%",
                                                "left": "0%",
                                                "id": "/CH2/L-R/assign-bus",
                                                "linkId": "",
                                                "label": "BUS MASTER",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH2/L-R/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "height": "20%",
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH2/GROUPS",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "50%",
                                        "id": "/CH2/AUX-BUSES",
                                        "label": "AUX BUSES",
                                        "width": "50%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH2/aux/AUX1/fader",
                                                "linkId": "",
                                                "label": "AUX 1",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH2/aux/AUX1/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "25%",
                                                "id": "/CH2/aux/AUX2/fader",
                                                "label": "AUX 2",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH2/aux/AUX2/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "50%",
                                                "id": "/CH2/aux/AUX3/fader",
                                                "label": "AUX 3",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH2/aux/AUX3/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "75%",
                                                "id": "/CH2/aux/AUX4/fader",
                                                "label": "AUX 4",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH2/aux/AUX4/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH2/AUX-BUSES",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "20%",
                                        "id": "CH2",
                                        "label": " ",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "layout": "",
                                        "spacing": 0,
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": 0,
                                                "left": 0,
                                                "id": "/CH2/player",
                                                "linkId": "",
                                                "label": "ADC || PLAY",
                                                "height": "25%",
                                                "color": "green",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH2/player",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "25%",
                                                "left": "0%",
                                                "id": "/CH2/phase",
                                                "linkId": "",
                                                "label": "PHASE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "blue",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH2/phase",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "50%",
                                                "left": "0%",
                                                "id": "/CH2/solo",
                                                "linkId": "",
                                                "label": "SOLO",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "yellow",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH2/solo",
                                                "preArgs": [],
                                                "target": [],
                                                "css": "",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "75%",
                                                "left": 0,
                                                "id": "/CH2/mute",
                                                "linkId": "",
                                                "label": "MUTE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "red",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH2/mute",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "/CH2",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_7",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            },
                            {
                                "id": "tab_8",
                                "label": "EQ",
                                "widgets": [
                                    {
                                        "type": "strip",
                                        "label": "Peak 2",
                                        "widgets": [
                                            {
                                                "id": "/CH1/eq_params/pk2active",
                                                "type": "toggle",
                                                "label": "ON",
                                                "height": "16%",
                                                "color": "auto",
                                                "css": "",
                                                "precision": 2,
                                                "preArgs": [],
                                                "on": 1,
                                                "off": 0,
                                                "linkId": "",
                                                "target": [],
                                                "address": "/CH1/eq_params/pk2active",
                                                "value": "",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "id": "/CH1/eq_params/pk2freq",
                                                "label": "Frequency",
                                                "type": "fader",
                                                "range": {
                                                    "min": 20,
                                                    "max": 22050
                                                },
                                                "unit": "Hz",
                                                "height": "28%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "logScale": false,
                                                "precision": 2,
                                                "preArgs": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "linkId": "",
                                                "origin": "auto",
                                                "target": [],
                                                "address": "/CH1/eq_params/pk2freq",
                                                "spring": false,
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "id": "/CH1/eq_params/pk2q",
                                                "label": "Q",
                                                "type": "fader",
                                                "range": {
                                                    "min": 0.125,
                                                    "max": 8
                                                },
                                                "unit": "",
                                                "height": "28%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "logScale": false,
                                                "precision": 2,
                                                "preArgs": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "linkId": "",
                                                "origin": "auto",
                                                "target": [],
                                                "address": "/CH1/eq_params/pk2q",
                                                "spring": false,
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "id": "/CH1/eq_params/pk2gain",
                                                "label": "Gain",
                                                "type": "fader",
                                                "range": {
                                                    "min": -20,
                                                    "max": 20
                                                },
                                                "unit": "dB",
                                                "height": "28%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "logScale": false,
                                                "precision": 2,
                                                "preArgs": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "linkId": "",
                                                "origin": 0,
                                                "target": [],
                                                "address": "/CH1/eq_params/pk2gain",
                                                "spring": false,
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "left": 360,
                                        "top": 120,
                                        "width": "14.3%",
                                        "height": "50%",
                                        "horizontal": false,
                                        "color": "auto",
                                        "css": "",
                                        "id": "Band 4",
                                        "scroll": true,
                                        "stretch": false,
                                        "border": true,
                                        "spacing": 0,
                                        "variables": "@{parent.variables}",
                                        "_geometry": "geometry",
                                        "_style": "style",
                                        "_panel": "panel",
                                        "layout": "",
                                        "value": "",
                                        "_osc": "osc",
                                        "precision": 0,
                                        "address": "auto",
                                        "preArgs": [],
                                        "target": [],
                                        "_children": "children",
                                        "tabs": []
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_8",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            }
                        ],
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_6",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "widgets": [],
                        "scroll": true
                    },
                    {
                        "id": "tab_9",
                        "label": "CH3",
                        "tabs": [
                            {
                                "id": "tab_10",
                                "label": "CONFIG + AUX",
                                "widgets": [
                                    {
                                        "type": "strip",
                                        "top": "0%",
                                        "left": "0%",
                                        "id": "CH3",
                                        "label": "auto",
                                        "width": "20%",
                                        "horizontal": false,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "id": "/CH3/pan",
                                                "linkId": "",
                                                "label": "PAN",
                                                "unit": "",
                                                "height": "20%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "L": -45
                                                    },
                                                    "max": {
                                                        "R": 45
                                                    }
                                                },
                                                "origin": 0,
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "address": "/CH3/pan",
                                                "preArgs": [],
                                                "target": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "id": "/CH3/fader",
                                                "linkId": "",
                                                "unit": "",
                                                "height": "80%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "snap": true,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-54": 46
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-24": 76
                                                    },
                                                    "50%": {
                                                        "-12": 88
                                                    },
                                                    "62.5%": {
                                                        "-6": 94
                                                    },
                                                    "75%": {
                                                        "0": 100
                                                    },
                                                    "87.5%": {
                                                        "+6": 106
                                                    },
                                                    "max": {
                                                        "+12": 112
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH3/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "label": "CH3",
                                                "value": "",
                                                "css": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "height": "100%",
                                        "scroll": true,
                                        "stretch": false,
                                        "border": true,
                                        "spacing": 0,
                                        "variables": "@{parent.variables}",
                                        "_style": "style",
                                        "_children": "children",
                                        "_geometry": "geometry",
                                        "_panel": "panel",
                                        "layout": "",
                                        "value": "",
                                        "_osc": "osc",
                                        "precision": 0,
                                        "address": "auto",
                                        "preArgs": [],
                                        "target": [],
                                        "tabs": []
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "35%",
                                        "id": "/CH3/GROUPS",
                                        "label": "GROUPS ASSIGN",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH3/G12/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 12",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH3/G12/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "20%",
                                                "left": "0%",
                                                "id": "/CH3/G34/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 34",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH3/G34/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "40%",
                                                "left": "0%",
                                                "id": "/CH3/G56/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 56",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH3/G56/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "60%",
                                                "left": "0%",
                                                "id": "/CH3/G78/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 78",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH3/G78/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "80%",
                                                "left": "0%",
                                                "id": "/CH3/L-R/assign-bus",
                                                "linkId": "",
                                                "label": "BUS MASTER",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH3/L-R/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "height": "20%",
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH3/GROUPS",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "50%",
                                        "id": "/CH3/AUX-BUSES",
                                        "label": "AUX BUSES",
                                        "width": "50%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH3/aux/AUX1/fader",
                                                "linkId": "",
                                                "label": "AUX 1",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH3/aux/AUX1/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "25%",
                                                "id": "/CH3/aux/AUX2/fader",
                                                "label": "AUX 2",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH3/aux/AUX2/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "50%",
                                                "id": "/CH3/aux/AUX3/fader",
                                                "label": "AUX 3",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH3/aux/AUX3/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "75%",
                                                "id": "/CH3/aux/AUX4/fader",
                                                "label": "AUX 4",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH3/aux/AUX4/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH3/AUX-BUSES",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "20%",
                                        "id": "CH3",
                                        "label": " ",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "layout": "",
                                        "spacing": 0,
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": 0,
                                                "left": 0,
                                                "id": "/CH3/player",
                                                "linkId": "",
                                                "label": "ADC || PLAY",
                                                "height": "25%",
                                                "color": "green",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH3/player",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "25%",
                                                "left": "0%",
                                                "id": "/CH3/phase",
                                                "linkId": "",
                                                "label": "PHASE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "blue",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH3/phase",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "50%",
                                                "left": "0%",
                                                "id": "/CH3/solo",
                                                "linkId": "",
                                                "label": "SOLO",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "yellow",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH3/solo",
                                                "preArgs": [],
                                                "target": [],
                                                "css": "",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "75%",
                                                "left": 0,
                                                "id": "/CH3/mute",
                                                "linkId": "",
                                                "label": "MUTE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "red",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH3/mute",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "/CH3",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_10",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            },
                            {
                                "id": "tab_11",
                                "label": "EQ",
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_11",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "widgets": [],
                                "tabs": [],
                                "scroll": true
                            }
                        ],
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_9",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "widgets": [],
                        "scroll": true
                    },
                    {
                        "id": "tab_12",
                        "label": "CH4",
                        "tabs": [
                            {
                                "id": "tab_13",
                                "label": "CONFIG + AUX",
                                "widgets": [
                                    {
                                        "type": "strip",
                                        "top": "0%",
                                        "left": "0%",
                                        "id": "CH4",
                                        "label": "auto",
                                        "width": "20%",
                                        "horizontal": false,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "id": "/CH4/pan",
                                                "linkId": "",
                                                "label": "PAN",
                                                "unit": "",
                                                "height": "20%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "L": -45
                                                    },
                                                    "max": {
                                                        "R": 45
                                                    }
                                                },
                                                "origin": 0,
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "address": "/CH4/pan",
                                                "preArgs": [],
                                                "target": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "id": "/CH4/fader",
                                                "linkId": "",
                                                "unit": "",
                                                "height": "80%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "snap": true,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-54": 46
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-24": 76
                                                    },
                                                    "50%": {
                                                        "-12": 88
                                                    },
                                                    "62.5%": {
                                                        "-6": 94
                                                    },
                                                    "75%": {
                                                        "0": 100
                                                    },
                                                    "87.5%": {
                                                        "+6": 106
                                                    },
                                                    "max": {
                                                        "+12": 112
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH4/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "label": "CH4",
                                                "value": "",
                                                "css": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "height": "100%",
                                        "scroll": true,
                                        "stretch": false,
                                        "border": true,
                                        "spacing": 0,
                                        "variables": "@{parent.variables}",
                                        "_style": "style",
                                        "_children": "children",
                                        "_geometry": "geometry",
                                        "_panel": "panel",
                                        "layout": "",
                                        "value": "",
                                        "_osc": "osc",
                                        "precision": 0,
                                        "address": "auto",
                                        "preArgs": [],
                                        "target": [],
                                        "tabs": []
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "35%",
                                        "id": "/CH4/GROUPS",
                                        "label": "GROUPS ASSIGN",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH4/G12/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 12",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH4/G12/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "20%",
                                                "left": "0%",
                                                "id": "/CH4/G34/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 34",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH4/G34/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "40%",
                                                "left": "0%",
                                                "id": "/CH4/G56/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 56",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH4/G56/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "60%",
                                                "left": "0%",
                                                "id": "/CH4/G78/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 78",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH4/G78/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "80%",
                                                "left": "0%",
                                                "id": "/CH4/L-R/assign-bus",
                                                "linkId": "",
                                                "label": "BUS MASTER",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH4/L-R/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "height": "20%",
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH4/GROUPS",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "50%",
                                        "id": "/CH4/AUX-BUSES",
                                        "label": "AUX BUSES",
                                        "width": "50%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH4/aux/AUX1/fader",
                                                "linkId": "",
                                                "label": "AUX 1",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH4/aux/AUX1/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "25%",
                                                "id": "/CH4/aux/AUX2/fader",
                                                "label": "AUX 2",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH4/aux/AUX2/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "50%",
                                                "id": "/CH4/aux/AUX3/fader",
                                                "label": "AUX 3",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH4/aux/AUX3/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "75%",
                                                "id": "/CH4/aux/AUX4/fader",
                                                "label": "AUX 4",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH4/aux/AUX4/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH4/AUX-BUSES",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "20%",
                                        "id": "CH4",
                                        "label": " ",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "layout": "",
                                        "spacing": 0,
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": 0,
                                                "left": 0,
                                                "id": "/CH4/player",
                                                "linkId": "",
                                                "label": "ADC || PLAY",
                                                "height": "25%",
                                                "color": "green",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH4/player",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "25%",
                                                "left": "0%",
                                                "id": "/CH4/phase",
                                                "linkId": "",
                                                "label": "PHASE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "blue",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH4/phase",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "50%",
                                                "left": "0%",
                                                "id": "/CH4/solo",
                                                "linkId": "",
                                                "label": "SOLO",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "yellow",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH4/solo",
                                                "preArgs": [],
                                                "target": [],
                                                "css": "",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "75%",
                                                "left": 0,
                                                "id": "/CH4/mute",
                                                "linkId": "",
                                                "label": "MUTE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "red",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH4/mute",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "/CH4",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_13",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            },
                            {
                                "id": "tab_14",
                                "label": "EQ",
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_14",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "widgets": [],
                                "tabs": [],
                                "scroll": true
                            }
                        ],
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_12",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "widgets": [],
                        "scroll": true
                    },
                    {
                        "id": "tab_15",
                        "label": "CH5",
                        "tabs": [
                            {
                                "id": "tab_16",
                                "label": "CONFIG + AUX",
                                "widgets": [
                                    {
                                        "type": "strip",
                                        "top": "0%",
                                        "left": "0%",
                                        "id": "CH5",
                                        "label": "auto",
                                        "width": "20%",
                                        "horizontal": false,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "id": "/CH5/pan",
                                                "linkId": "",
                                                "label": "PAN",
                                                "unit": "",
                                                "height": "20%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "L": -45
                                                    },
                                                    "max": {
                                                        "R": 45
                                                    }
                                                },
                                                "origin": 0,
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "address": "/CH5/pan",
                                                "preArgs": [],
                                                "target": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "id": "/CH5/fader",
                                                "linkId": "",
                                                "unit": "",
                                                "height": "80%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "snap": true,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-54": 46
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-24": 76
                                                    },
                                                    "50%": {
                                                        "-12": 88
                                                    },
                                                    "62.5%": {
                                                        "-6": 94
                                                    },
                                                    "75%": {
                                                        "0": 100
                                                    },
                                                    "87.5%": {
                                                        "+6": 106
                                                    },
                                                    "max": {
                                                        "+12": 112
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH5/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "label": "CH5",
                                                "value": "",
                                                "css": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "height": "100%",
                                        "scroll": true,
                                        "stretch": false,
                                        "border": true,
                                        "spacing": 0,
                                        "variables": "@{parent.variables}",
                                        "_style": "style",
                                        "_children": "children",
                                        "_geometry": "geometry",
                                        "_panel": "panel",
                                        "layout": "",
                                        "value": "",
                                        "_osc": "osc",
                                        "precision": 0,
                                        "address": "auto",
                                        "preArgs": [],
                                        "target": [],
                                        "tabs": []
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "35%",
                                        "id": "/CH5/GROUPS",
                                        "label": "GROUPS ASSIGN",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH5/G12/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 12",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH5/G12/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "20%",
                                                "left": "0%",
                                                "id": "/CH5/G34/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 34",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH5/G34/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "40%",
                                                "left": "0%",
                                                "id": "/CH5/G56/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 56",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH5/G56/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "60%",
                                                "left": "0%",
                                                "id": "/CH5/G78/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 78",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH5/G78/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "80%",
                                                "left": "0%",
                                                "id": "/CH5/L-R/assign-bus",
                                                "linkId": "",
                                                "label": "BUS MASTER",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH5/L-R/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "height": "20%",
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH5/GROUPS",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "50%",
                                        "id": "/CH5/AUX-BUSES",
                                        "label": "AUX BUSES",
                                        "width": "50%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH5/aux/AUX1/fader",
                                                "linkId": "",
                                                "label": "AUX 1",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH5/aux/AUX1/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "25%",
                                                "id": "/CH5/aux/AUX2/fader",
                                                "label": "AUX 2",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH5/aux/AUX2/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "50%",
                                                "id": "/CH5/aux/AUX3/fader",
                                                "label": "AUX 3",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH5/aux/AUX3/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "75%",
                                                "id": "/CH5/aux/AUX4/fader",
                                                "label": "AUX 4",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH5/aux/AUX4/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH5/AUX-BUSES",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "20%",
                                        "id": "CH5",
                                        "label": " ",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "layout": "",
                                        "spacing": 0,
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": 0,
                                                "left": 0,
                                                "id": "/CH5/player",
                                                "linkId": "",
                                                "label": "ADC || PLAY",
                                                "height": "25%",
                                                "color": "green",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH5/player",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "25%",
                                                "left": "0%",
                                                "id": "/CH5/phase",
                                                "linkId": "",
                                                "label": "PHASE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "blue",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH5/phase",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "50%",
                                                "left": "0%",
                                                "id": "/CH5/solo",
                                                "linkId": "",
                                                "label": "SOLO",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "yellow",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH5/solo",
                                                "preArgs": [],
                                                "target": [],
                                                "css": "",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "75%",
                                                "left": 0,
                                                "id": "/CH5/mute",
                                                "linkId": "",
                                                "label": "MUTE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "red",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH5/mute",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "/CH5",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_16",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            },
                            {
                                "id": "tab_17",
                                "label": "EQ",
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_17",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "widgets": [],
                                "tabs": [],
                                "scroll": true
                            }
                        ],
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_15",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "widgets": [],
                        "scroll": true
                    },
                    {
                        "id": "tab_18",
                        "label": "CH6",
                        "tabs": [
                            {
                                "id": "tab_19",
                                "label": "CONFIG + AUX",
                                "widgets": [
                                    {
                                        "type": "strip",
                                        "top": "0%",
                                        "left": "0%",
                                        "id": "CH6",
                                        "label": "auto",
                                        "width": "20%",
                                        "horizontal": false,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "id": "/CH6/pan",
                                                "linkId": "",
                                                "label": "PAN",
                                                "unit": "",
                                                "height": "20%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "L": -45
                                                    },
                                                    "max": {
                                                        "R": 45
                                                    }
                                                },
                                                "origin": 0,
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "address": "/CH6/pan",
                                                "preArgs": [],
                                                "target": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "id": "/CH6/fader",
                                                "linkId": "",
                                                "unit": "",
                                                "height": "80%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "snap": true,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-54": 46
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-24": 76
                                                    },
                                                    "50%": {
                                                        "-12": 88
                                                    },
                                                    "62.5%": {
                                                        "-6": 94
                                                    },
                                                    "75%": {
                                                        "0": 100
                                                    },
                                                    "87.5%": {
                                                        "+6": 106
                                                    },
                                                    "max": {
                                                        "+12": 112
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH6/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "label": "CH6",
                                                "value": "",
                                                "css": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "height": "100%",
                                        "scroll": true,
                                        "stretch": false,
                                        "border": true,
                                        "spacing": 0,
                                        "variables": "@{parent.variables}",
                                        "_style": "style",
                                        "_children": "children",
                                        "_geometry": "geometry",
                                        "_panel": "panel",
                                        "layout": "",
                                        "value": "",
                                        "_osc": "osc",
                                        "precision": 0,
                                        "address": "auto",
                                        "preArgs": [],
                                        "target": [],
                                        "tabs": []
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "35%",
                                        "id": "/CH6/GROUPS",
                                        "label": "GROUPS ASSIGN",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH6/G12/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 12",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH6/G12/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "20%",
                                                "left": "0%",
                                                "id": "/CH6/G34/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 34",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH6/G34/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "40%",
                                                "left": "0%",
                                                "id": "/CH6/G56/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 56",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH6/G56/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "60%",
                                                "left": "0%",
                                                "id": "/CH6/G78/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 78",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH6/G78/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "80%",
                                                "left": "0%",
                                                "id": "/CH6/L-R/assign-bus",
                                                "linkId": "",
                                                "label": "BUS MASTER",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH6/L-R/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "height": "20%",
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH6/GROUPS",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "50%",
                                        "id": "/CH6/AUX-BUSES",
                                        "label": "AUX BUSES",
                                        "width": "50%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH6/aux/AUX1/fader",
                                                "linkId": "",
                                                "label": "AUX 1",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH6/aux/AUX1/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "25%",
                                                "id": "/CH6/aux/AUX2/fader",
                                                "label": "AUX 2",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH6/aux/AUX2/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "50%",
                                                "id": "/CH6/aux/AUX3/fader",
                                                "label": "AUX 3",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH6/aux/AUX3/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "75%",
                                                "id": "/CH6/aux/AUX4/fader",
                                                "label": "AUX 4",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH6/aux/AUX4/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH6/AUX-BUSES",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "20%",
                                        "id": "CH6",
                                        "label": " ",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "layout": "",
                                        "spacing": 0,
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": 0,
                                                "left": 0,
                                                "id": "/CH6/player",
                                                "linkId": "",
                                                "label": "ADC || PLAY",
                                                "height": "25%",
                                                "color": "green",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH6/player",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "25%",
                                                "left": "0%",
                                                "id": "/CH6/phase",
                                                "linkId": "",
                                                "label": "PHASE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "blue",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH6/phase",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "50%",
                                                "left": "0%",
                                                "id": "/CH6/solo",
                                                "linkId": "",
                                                "label": "SOLO",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "yellow",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH6/solo",
                                                "preArgs": [],
                                                "target": [],
                                                "css": "",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "75%",
                                                "left": 0,
                                                "id": "/CH6/mute",
                                                "linkId": "",
                                                "label": "MUTE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "red",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH6/mute",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "/CH6",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_19",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            },
                            {
                                "id": "tab_20",
                                "label": "EQ",
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_20",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "widgets": [],
                                "tabs": [],
                                "scroll": true
                            }
                        ],
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_18",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "widgets": [],
                        "scroll": true
                    },
                    {
                        "id": "tab_21",
                        "label": "CH7",
                        "tabs": [
                            {
                                "id": "tab_22",
                                "label": "CONFIG + AUX",
                                "widgets": [
                                    {
                                        "type": "strip",
                                        "top": "0%",
                                        "left": "0%",
                                        "id": "CH7",
                                        "label": "auto",
                                        "width": "20%",
                                        "horizontal": false,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "id": "/CH7/pan",
                                                "linkId": "",
                                                "label": "PAN",
                                                "unit": "",
                                                "height": "20%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "L": -45
                                                    },
                                                    "max": {
                                                        "R": 45
                                                    }
                                                },
                                                "origin": 0,
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "address": "/CH7/pan",
                                                "preArgs": [],
                                                "target": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "id": "/CH7/fader",
                                                "linkId": "",
                                                "unit": "",
                                                "height": "80%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "snap": true,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-54": 46
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-24": 76
                                                    },
                                                    "50%": {
                                                        "-12": 88
                                                    },
                                                    "62.5%": {
                                                        "-6": 94
                                                    },
                                                    "75%": {
                                                        "0": 100
                                                    },
                                                    "87.5%": {
                                                        "+6": 106
                                                    },
                                                    "max": {
                                                        "+12": 112
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH7/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "label": "CH7",
                                                "value": "",
                                                "css": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "height": "100%",
                                        "scroll": true,
                                        "stretch": false,
                                        "border": true,
                                        "spacing": 0,
                                        "variables": "@{parent.variables}",
                                        "_style": "style",
                                        "_children": "children",
                                        "_geometry": "geometry",
                                        "_panel": "panel",
                                        "layout": "",
                                        "value": "",
                                        "_osc": "osc",
                                        "precision": 0,
                                        "address": "auto",
                                        "preArgs": [],
                                        "target": [],
                                        "tabs": []
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "35%",
                                        "id": "/CH7/GROUPS",
                                        "label": "GROUPS ASSIGN",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH7/G12/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 12",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH7/G12/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "20%",
                                                "left": "0%",
                                                "id": "/CH7/G34/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 34",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH7/G34/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "40%",
                                                "left": "0%",
                                                "id": "/CH7/G56/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 56",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH7/G56/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "60%",
                                                "left": "0%",
                                                "id": "/CH7/G78/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 78",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH7/G78/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "80%",
                                                "left": "0%",
                                                "id": "/CH7/L-R/assign-bus",
                                                "linkId": "",
                                                "label": "BUS MASTER",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH7/L-R/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "height": "20%",
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH7/GROUPS",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "50%",
                                        "id": "/CH7/AUX-BUSES",
                                        "label": "AUX BUSES",
                                        "width": "50%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH7/aux/AUX1/fader",
                                                "linkId": "",
                                                "label": "AUX 1",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH7/aux/AUX1/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "25%",
                                                "id": "/CH7/aux/AUX2/fader",
                                                "label": "AUX 2",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH7/aux/AUX2/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "50%",
                                                "id": "/CH7/aux/AUX3/fader",
                                                "label": "AUX 3",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH7/aux/AUX3/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "75%",
                                                "id": "/CH7/aux/AUX4/fader",
                                                "label": "AUX 4",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH7/aux/AUX4/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH7/AUX-BUSES",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "20%",
                                        "id": "CH7",
                                        "label": " ",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "layout": "",
                                        "spacing": 0,
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": 0,
                                                "left": 0,
                                                "id": "/CH7/player",
                                                "linkId": "",
                                                "label": "ADC || PLAY",
                                                "height": "25%",
                                                "color": "green",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH7/player",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "25%",
                                                "left": "0%",
                                                "id": "/CH7/phase",
                                                "linkId": "",
                                                "label": "PHASE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "blue",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH7/phase",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "50%",
                                                "left": "0%",
                                                "id": "/CH7/solo",
                                                "linkId": "",
                                                "label": "SOLO",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "yellow",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH7/solo",
                                                "preArgs": [],
                                                "target": [],
                                                "css": "",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "75%",
                                                "left": 0,
                                                "id": "/CH7/mute",
                                                "linkId": "",
                                                "label": "MUTE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "red",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH7/mute",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "/CH7",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_22",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            },
                            {
                                "id": "tab_23",
                                "label": "EQ",
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_23",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "widgets": [],
                                "tabs": [],
                                "scroll": true
                            }
                        ],
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_21",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "widgets": [],
                        "scroll": true
                    },
                    {
                        "id": "tab_24",
                        "label": "CH8",
                        "tabs": [
                            {
                                "id": "tab_25",
                                "label": "CONFIG + AUX",
                                "widgets": [
                                    {
                                        "type": "strip",
                                        "top": "0%",
                                        "left": "0%",
                                        "id": "CH8",
                                        "label": "auto",
                                        "width": "20%",
                                        "horizontal": false,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "id": "/CH8/pan",
                                                "linkId": "",
                                                "label": "PAN",
                                                "unit": "",
                                                "height": "20%",
                                                "color": "auto",
                                                "compact": true,
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "L": -45
                                                    },
                                                    "max": {
                                                        "R": 45
                                                    }
                                                },
                                                "origin": 0,
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "address": "/CH8/pan",
                                                "preArgs": [],
                                                "target": [],
                                                "alignRight": false,
                                                "horizontal": true,
                                                "meter": false,
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "id": "/CH8/fader",
                                                "linkId": "",
                                                "unit": "",
                                                "height": "80%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "snap": true,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-54": 46
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-24": 76
                                                    },
                                                    "50%": {
                                                        "-12": 88
                                                    },
                                                    "62.5%": {
                                                        "-6": 94
                                                    },
                                                    "75%": {
                                                        "0": 100
                                                    },
                                                    "87.5%": {
                                                        "+6": 106
                                                    },
                                                    "max": {
                                                        "+12": 112
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH8/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "label": "CH8",
                                                "value": "",
                                                "css": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "height": "100%",
                                        "scroll": true,
                                        "stretch": false,
                                        "border": true,
                                        "spacing": 0,
                                        "variables": "@{parent.variables}",
                                        "_style": "style",
                                        "_children": "children",
                                        "_geometry": "geometry",
                                        "_panel": "panel",
                                        "layout": "",
                                        "value": "",
                                        "_osc": "osc",
                                        "precision": 0,
                                        "address": "auto",
                                        "preArgs": [],
                                        "target": [],
                                        "tabs": []
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "35%",
                                        "id": "/CH8/GROUPS",
                                        "label": "GROUPS ASSIGN",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH8/G12/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 12",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH8/G12/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "20%",
                                                "left": "0%",
                                                "id": "/CH8/G34/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 34",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH8/G34/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "40%",
                                                "left": "0%",
                                                "id": "/CH8/G56/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 56",
                                                "width": "100%",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH8/G56/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "60%",
                                                "left": "0%",
                                                "id": "/CH8/G78/assign-bus",
                                                "linkId": "",
                                                "label": "GROUP 78",
                                                "height": "20%",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH8/G78/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "80%",
                                                "left": "0%",
                                                "id": "/CH8/L-R/assign-bus",
                                                "linkId": "",
                                                "label": "BUS MASTER",
                                                "color": "auto",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH8/L-R/assign-bus",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "height": "20%",
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH8/GROUPS",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "50%",
                                        "id": "/CH8/AUX-BUSES",
                                        "label": "AUX BUSES",
                                        "width": "50%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "widgets": [
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "0%",
                                                "id": "/CH8/aux/AUX1/fader",
                                                "linkId": "",
                                                "label": "AUX 1",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH8/aux/AUX1/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "value": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "25%",
                                                "id": "/CH8/aux/AUX2/fader",
                                                "label": "AUX 2",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH8/aux/AUX2/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "50%",
                                                "id": "/CH8/aux/AUX3/fader",
                                                "label": "AUX 3",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH8/aux/AUX3/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            },
                                            {
                                                "type": "fader",
                                                "top": "0%",
                                                "left": "75%",
                                                "id": "/CH8/aux/AUX4/fader",
                                                "label": "AUX 4",
                                                "unit": "",
                                                "width": "25%",
                                                "height": "100%",
                                                "alignRight": false,
                                                "horizontal": false,
                                                "compact": false,
                                                "color": "auto",
                                                "css": "",
                                                "snap": false,
                                                "spring": false,
                                                "range": {
                                                    "min": {
                                                        "inf": 0
                                                    },
                                                    "12.5%": {
                                                        "-48": 52
                                                    },
                                                    "25%": {
                                                        "-36": 64
                                                    },
                                                    "37.5%": {
                                                        "-32": 70
                                                    },
                                                    "50%": {
                                                        "-24": 76
                                                    },
                                                    "62.5%": {
                                                        "-18": 82
                                                    },
                                                    "75%": {
                                                        "-12": 88
                                                    },
                                                    "87.5%": {
                                                        "-6": 94
                                                    },
                                                    "max": {
                                                        "0": 100
                                                    }
                                                },
                                                "origin": "auto",
                                                "value": "",
                                                "logScale": false,
                                                "precision": 2,
                                                "meter": false,
                                                "address": "/CH8/aux/AUX4/fader",
                                                "preArgs": [],
                                                "target": [],
                                                "linkId": "",
                                                "pips": true,
                                                "input": true,
                                                "dashed": false,
                                                "doubleTap": false,
                                                "touchAddress": "",
                                                "meterAddress": ""
                                            }
                                        ],
                                        "tabs": [],
                                        "layout": "",
                                        "spacing": 0,
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "//CH8/AUX-BUSES",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    },
                                    {
                                        "type": "panel",
                                        "top": "0%",
                                        "left": "20%",
                                        "id": "CH8",
                                        "label": " ",
                                        "width": "15%",
                                        "height": "100%",
                                        "scroll": true,
                                        "color": "auto",
                                        "css": "",
                                        "layout": "",
                                        "spacing": 0,
                                        "widgets": [
                                            {
                                                "type": "toggle",
                                                "top": 0,
                                                "left": 0,
                                                "id": "/CH8/player",
                                                "linkId": "",
                                                "label": "ADC || PLAY",
                                                "height": "25%",
                                                "color": "green",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH8/player",
                                                "preArgs": [],
                                                "target": [],
                                                "width": "100%",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "25%",
                                                "left": "0%",
                                                "id": "/CH8/phase",
                                                "linkId": "",
                                                "label": "PHASE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "blue",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH8/phase",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "50%",
                                                "left": "0%",
                                                "id": "/CH8/solo",
                                                "linkId": "",
                                                "label": "SOLO",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "yellow",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH8/solo",
                                                "preArgs": [],
                                                "target": [],
                                                "css": "",
                                                "doubleTap": false,
                                                "led": false
                                            },
                                            {
                                                "type": "toggle",
                                                "top": "75%",
                                                "left": 0,
                                                "id": "/CH8/mute",
                                                "linkId": "",
                                                "label": "MUTE",
                                                "width": "100%",
                                                "height": "25%",
                                                "color": "red",
                                                "css": "",
                                                "on": 1,
                                                "off": 0,
                                                "value": "",
                                                "precision": 2,
                                                "address": "/CH8/mute",
                                                "preArgs": [],
                                                "target": [],
                                                "doubleTap": false,
                                                "led": false
                                            }
                                        ],
                                        "tabs": [],
                                        "border": true,
                                        "value": "",
                                        "precision": 0,
                                        "address": "/CH8",
                                        "preArgs": [],
                                        "target": [],
                                        "variables": "@{parent.variables}"
                                    }
                                ],
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_25",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "tabs": [],
                                "scroll": true
                            },
                            {
                                "id": "tab_26",
                                "label": "EQ",
                                "type": "tab",
                                "color": "auto",
                                "css": "",
                                "layout": "",
                                "spacing": 0,
                                "value": "",
                                "precision": 0,
                                "address": "/tab_26",
                                "preArgs": [],
                                "target": [],
                                "variables": "@{parent.variables}",
                                "widgets": [],
                                "tabs": [],
                                "scroll": true
                            }
                        ],
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_24",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "widgets": [],
                        "scroll": true
                    }
                ],
                "type": "tab",
                "color": "auto",
                "css": "",
                "layout": "",
                "spacing": 0,
                "value": "",
                "precision": 0,
                "address": "/tab_2",
                "preArgs": [],
                "target": [],
                "variables": "@{parent.variables}",
                "widgets": [],
                "scroll": true
            },
            {
                "label": "AUX BUSES",
                "tabs": [
                    {
                        "label": "AUX 1",
                        "widgets": [
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "0%",
                                "id": "/CH1/aux/AUX1/fader",
                                "linkId": "",
                                "label": "CH1",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH1/aux/AUX1/fader",
                                "preArgs": [],
                                "target": [],
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "12.5%",
                                "id": "/CH2/aux/AUX1/fader",
                                "label": "CH2",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH2/aux/AUX1/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "25%",
                                "label": "CH3",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH3/aux/AUX1/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "id": "/CH3/aux/AUX1/fader",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "37.5%",
                                "id": "/CH4/aux/AUX1/fader",
                                "label": "CH4",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH4/aux/AUX1/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "50%",
                                "id": "/CH5/aux/AUX1/fader",
                                "label": "CH5",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH5/aux/AUX1/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "62.5%",
                                "id": "/CH6/aux/AUX1/fader",
                                "label": "CH6",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH6/aux/AUX1/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "75%",
                                "id": "/CH7/aux/AUX1/fader",
                                "label": "CH7",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH7/aux/AUX1/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "87.5%",
                                "id": "/CH8/aux/AUX1/fader",
                                "label": "CH8",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH8/aux/AUX1/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            }
                        ],
                        "id": "tab_28",
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_28",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "tabs": [],
                        "scroll": true
                    },
                    {
                        "label": "AUX 2",
                        "widgets": [
                            {
                                "type": "fader",
                                "top": 0,
                                "left": 0,
                                "id": "/CH1/aux/AUX2/fader",
                                "label": "CH1",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH1/aux/AUX2/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "12.5%",
                                "id": "/CH2/aux/AUX2/fader",
                                "label": "CH2",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH2/aux/AUX2/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "25%",
                                "id": "/CH3/aux/AUX2/fader",
                                "label": "CH3",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH3/aux/AUX2/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "37.5%",
                                "id": "/CH4/aux/AUX2/fader",
                                "label": "CH4",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH4/aux/AUX2/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "50%",
                                "id": "/CH5/aux/AUX2/fader",
                                "label": "CH5",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH5/aux/AUX2/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "62.5%",
                                "id": "/CH6/aux/AUX2/fader",
                                "label": "CH6",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH6/aux/AUX2/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "75%",
                                "id": "/CH7/aux/AUX2/fader",
                                "label": "CH7",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH7/aux/AUX2/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "87.5%",
                                "id": "/CH8/aux/AUX2/fader",
                                "label": "CH8",
                                "unit": "",
                                "width": "12.5%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH8/aux/AUX2/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "height": "100%",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            }
                        ],
                        "id": "tab_29",
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_29",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "tabs": [],
                        "scroll": true
                    },
                    {
                        "label": "AUX 3",
                        "widgets": [
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "0%",
                                "id": "/CH1/aux/AUX3/fader",
                                "label": "CH1",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH1/aux/AUX3/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "12.5%",
                                "id": "/CH2/aux/AUX3/fader",
                                "label": "CH2",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH2/aux/AUX3/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "25%",
                                "id": "/CH3/aux/AUX3/fader",
                                "label": "CH3",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH3/aux/AUX3/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "37.5%",
                                "id": "/CH4/aux/AUX3/fader",
                                "label": "CH4",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH4/aux/AUX3/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "50%",
                                "id": "/CH5/aux/AUX3/fader",
                                "label": "CH5",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH5/aux/AUX3/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "62.5%",
                                "id": "/CH6/aux/AUX3/fader",
                                "label": "CH6",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH6/aux/AUX3/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "75%",
                                "id": "/CH7/aux/AUX3/fader",
                                "label": "CH7",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH7/aux/AUX3/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "87.5%",
                                "id": "/CH8/aux/AUX3/fader",
                                "label": "CH8",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH8/aux/AUX3/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            }
                        ],
                        "id": "tab_30",
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_30",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "tabs": [],
                        "scroll": true
                    },
                    {
                        "label": "AUX 4",
                        "widgets": [
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "0%",
                                "id": "/CH1/aux/AUX4/fader",
                                "label": "CH1",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH1/aux/AUX4/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "12.5%",
                                "id": "/CH2/aux/AUX4/fader",
                                "label": "CH2",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH2/aux/AUX4/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "25%",
                                "id": "/CH3/aux/AUX4/fader",
                                "label": "CH3",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH3/aux/AUX4/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "37.5%",
                                "id": "/CH4/aux/AUX4/fader",
                                "label": "CH4",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH4/aux/AUX4/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "50%",
                                "id": "/CH5/aux/AUX4/fader",
                                "label": "CH5",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH5/aux/AUX4/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "62.5%",
                                "id": "/CH6/aux/AUX4/fader",
                                "label": "CH6",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH6/aux/AUX4/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "75%",
                                "id": "/CH7/aux/AUX4/fader",
                                "label": "CH7",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH7/aux/AUX4/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "fader",
                                "top": "0%",
                                "left": "87.5%",
                                "id": "/CH8/aux/AUX4/fader",
                                "label": "CH8",
                                "unit": "",
                                "width": "12.5%",
                                "height": "100%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-48": 52
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-32": 70
                                    },
                                    "50%": {
                                        "-24": 76
                                    },
                                    "62.5%": {
                                        "-18": 82
                                    },
                                    "75%": {
                                        "-12": 88
                                    },
                                    "87.5%": {
                                        "-6": 94
                                    },
                                    "max": {
                                        "0": 100
                                    }
                                },
                                "origin": "auto",
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/CH8/aux/AUX4/fader",
                                "preArgs": [],
                                "target": [],
                                "linkId": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            }
                        ],
                        "id": "tab_31",
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_31",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "tabs": [],
                        "scroll": true
                    },
                    {
                        "id": "tab_32",
                        "label": "AUX MASTERS",
                        "widgets": [
                            {
                                "type": "strip",
                                "top": "0%",
                                "left": "0%",
                                "id": "AUX1",
                                "label": "auto",
                                "width": "25%",
                                "horizontal": false,
                                "color": "auto",
                                "css": "",
                                "widgets": [
                                    {
                                        "type": "toggle",
                                        "id": "/AUX1/solo",
                                        "linkId": "",
                                        "label": "SOLO",
                                        "height": "10%",
                                        "color": "yellow",
                                        "on": 1,
                                        "off": 0,
                                        "value": "",
                                        "precision": 2,
                                        "address": "/AUX1/solo",
                                        "preArgs": [],
                                        "target": [],
                                        "css": "",
                                        "doubleTap": false,
                                        "led": false
                                    },
                                    {
                                        "type": "fader",
                                        "id": "/AUX1/fader",
                                        "linkId": "",
                                        "unit": "",
                                        "height": "80%",
                                        "alignRight": false,
                                        "horizontal": false,
                                        "compact": false,
                                        "color": "auto",
                                        "snap": true,
                                        "spring": false,
                                        "range": {
                                            "min": {
                                                "inf": 0
                                            },
                                            "12.5%": {
                                                "-54": 46
                                            },
                                            "25%": {
                                                "-36": 64
                                            },
                                            "37.5%": {
                                                "-24": 76
                                            },
                                            "50%": {
                                                "-12": 88
                                            },
                                            "62.5%": {
                                                "-6": 94
                                            },
                                            "75%": {
                                                "0": 100
                                            },
                                            "87.5%": {
                                                "+6": 106
                                            },
                                            "max": {
                                                "+12": 112
                                            }
                                        },
                                        "origin": "auto",
                                        "logScale": false,
                                        "precision": 2,
                                        "meter": false,
                                        "address": "/AUX1/fader",
                                        "preArgs": [],
                                        "target": [],
                                        "label": "AUX1",
                                        "value": "",
                                        "css": "",
                                        "pips": true,
                                        "input": true,
                                        "dashed": false,
                                        "doubleTap": false,
                                        "touchAddress": "",
                                        "meterAddress": ""
                                    },
                                    {
                                        "type": "toggle",
                                        "id": "/AUX1/mute",
                                        "linkId": "",
                                        "label": "MUTE",
                                        "height": "10%",
                                        "color": "red",
                                        "css": "",
                                        "on": 1,
                                        "off": 0,
                                        "value": "",
                                        "precision": 2,
                                        "address": "/AUX1/mute",
                                        "preArgs": [],
                                        "target": [],
                                        "doubleTap": false,
                                        "led": false
                                    }
                                ],
                                "height": "100%",
                                "scroll": true,
                                "stretch": false,
                                "border": true,
                                "spacing": 0,
                                "variables": "@{parent.variables}",
                                "_style": "style",
                                "_children": "children",
                                "_geometry": "geometry",
                                "_panel": "panel",
                                "layout": "",
                                "value": "",
                                "_osc": "osc",
                                "precision": 0,
                                "address": "auto",
                                "preArgs": [],
                                "target": [],
                                "tabs": []
                            },
                            {
                                "type": "strip",
                                "top": "0%",
                                "left": "25%",
                                "id": "AUX2",
                                "label": "auto",
                                "width": "25%",
                                "horizontal": false,
                                "color": "auto",
                                "css": "",
                                "widgets": [
                                    {
                                        "type": "toggle",
                                        "id": "/AUX2/solo",
                                        "linkId": "",
                                        "label": "SOLO",
                                        "height": "10%",
                                        "color": "yellow",
                                        "on": 1,
                                        "off": 0,
                                        "value": "",
                                        "precision": 2,
                                        "address": "/AUX2/solo",
                                        "preArgs": [],
                                        "target": [],
                                        "css": "",
                                        "doubleTap": false,
                                        "led": false
                                    },
                                    {
                                        "type": "fader",
                                        "id": "/AUX2/fader",
                                        "linkId": "",
                                        "unit": "",
                                        "height": "80%",
                                        "alignRight": false,
                                        "horizontal": false,
                                        "compact": false,
                                        "color": "auto",
                                        "snap": true,
                                        "spring": false,
                                        "range": {
                                            "min": {
                                                "inf": 0
                                            },
                                            "12.5%": {
                                                "-54": 46
                                            },
                                            "25%": {
                                                "-36": 64
                                            },
                                            "37.5%": {
                                                "-24": 76
                                            },
                                            "50%": {
                                                "-12": 88
                                            },
                                            "62.5%": {
                                                "-6": 94
                                            },
                                            "75%": {
                                                "0": 100
                                            },
                                            "87.5%": {
                                                "+6": 106
                                            },
                                            "max": {
                                                "+12": 112
                                            }
                                        },
                                        "origin": "auto",
                                        "logScale": false,
                                        "precision": 2,
                                        "meter": false,
                                        "address": "/AUX2/fader",
                                        "preArgs": [],
                                        "target": [],
                                        "label": "AUX2",
                                        "value": "",
                                        "css": "",
                                        "pips": true,
                                        "input": true,
                                        "dashed": false,
                                        "doubleTap": false,
                                        "touchAddress": "",
                                        "meterAddress": ""
                                    },
                                    {
                                        "type": "toggle",
                                        "id": "/AUX2/mute",
                                        "linkId": "",
                                        "label": "MUTE",
                                        "height": "10%",
                                        "color": "red",
                                        "css": "",
                                        "on": 1,
                                        "off": 0,
                                        "value": "",
                                        "precision": 2,
                                        "address": "/AUX2/mute",
                                        "preArgs": [],
                                        "target": [],
                                        "doubleTap": false,
                                        "led": false
                                    }
                                ],
                                "height": "100%",
                                "scroll": true,
                                "stretch": false,
                                "border": true,
                                "spacing": 0,
                                "variables": "@{parent.variables}",
                                "_style": "style",
                                "_children": "children",
                                "_geometry": "geometry",
                                "_panel": "panel",
                                "layout": "",
                                "value": "",
                                "_osc": "osc",
                                "precision": 0,
                                "address": "auto",
                                "preArgs": [],
                                "target": [],
                                "tabs": []
                            },
                            {
                                "type": "strip",
                                "top": "0%",
                                "left": "50%",
                                "id": "AUX3",
                                "label": "auto",
                                "width": "25%",
                                "horizontal": false,
                                "color": "auto",
                                "css": "",
                                "widgets": [
                                    {
                                        "type": "toggle",
                                        "id": "/AUX3/solo",
                                        "linkId": "",
                                        "label": "SOLO",
                                        "height": "10%",
                                        "color": "yellow",
                                        "on": 1,
                                        "off": 0,
                                        "value": "",
                                        "precision": 2,
                                        "address": "/AUX3/solo",
                                        "preArgs": [],
                                        "target": [],
                                        "css": "",
                                        "doubleTap": false,
                                        "led": false
                                    },
                                    {
                                        "type": "fader",
                                        "id": "/AUX3/fader",
                                        "linkId": "",
                                        "unit": "",
                                        "height": "80%",
                                        "alignRight": false,
                                        "horizontal": false,
                                        "compact": false,
                                        "color": "auto",
                                        "snap": true,
                                        "spring": false,
                                        "range": {
                                            "min": {
                                                "inf": 0
                                            },
                                            "12.5%": {
                                                "-54": 46
                                            },
                                            "25%": {
                                                "-36": 64
                                            },
                                            "37.5%": {
                                                "-24": 76
                                            },
                                            "50%": {
                                                "-12": 88
                                            },
                                            "62.5%": {
                                                "-6": 94
                                            },
                                            "75%": {
                                                "0": 100
                                            },
                                            "87.5%": {
                                                "+6": 106
                                            },
                                            "max": {
                                                "+12": 112
                                            }
                                        },
                                        "origin": "auto",
                                        "logScale": false,
                                        "precision": 2,
                                        "meter": false,
                                        "address": "/AUX3/fader",
                                        "preArgs": [],
                                        "target": [],
                                        "label": "AUX3",
                                        "value": "",
                                        "css": "",
                                        "pips": true,
                                        "input": true,
                                        "dashed": false,
                                        "doubleTap": false,
                                        "touchAddress": "",
                                        "meterAddress": ""
                                    },
                                    {
                                        "type": "toggle",
                                        "id": "/AUX3/mute",
                                        "linkId": "",
                                        "label": "MUTE",
                                        "height": "10%",
                                        "color": "red",
                                        "css": "",
                                        "on": 1,
                                        "off": 0,
                                        "value": "",
                                        "precision": 2,
                                        "address": "/AUX3/mute",
                                        "preArgs": [],
                                        "target": [],
                                        "doubleTap": false,
                                        "led": false
                                    }
                                ],
                                "height": "100%",
                                "scroll": true,
                                "stretch": false,
                                "border": true,
                                "spacing": 0,
                                "variables": "@{parent.variables}",
                                "_style": "style",
                                "_children": "children",
                                "_geometry": "geometry",
                                "_panel": "panel",
                                "layout": "",
                                "value": "",
                                "_osc": "osc",
                                "precision": 0,
                                "address": "auto",
                                "preArgs": [],
                                "target": [],
                                "tabs": []
                            },
                            {
                                "type": "strip",
                                "top": "0%",
                                "left": "75%",
                                "id": "AUX4",
                                "label": "auto",
                                "width": "25%",
                                "horizontal": false,
                                "color": "auto",
                                "css": "",
                                "widgets": [
                                    {
                                        "type": "toggle",
                                        "id": "/AUX4/solo",
                                        "linkId": "",
                                        "label": "SOLO",
                                        "height": "10%",
                                        "color": "yellow",
                                        "on": 1,
                                        "off": 0,
                                        "value": "",
                                        "precision": 2,
                                        "address": "/AUX4/solo",
                                        "preArgs": [],
                                        "target": [],
                                        "css": "",
                                        "doubleTap": false,
                                        "led": false
                                    },
                                    {
                                        "type": "fader",
                                        "id": "/AUX4/fader",
                                        "linkId": "",
                                        "unit": "",
                                        "height": "80%",
                                        "alignRight": false,
                                        "horizontal": false,
                                        "compact": false,
                                        "color": "auto",
                                        "snap": true,
                                        "spring": false,
                                        "range": {
                                            "min": {
                                                "inf": 0
                                            },
                                            "12.5%": {
                                                "-54": 46
                                            },
                                            "25%": {
                                                "-36": 64
                                            },
                                            "37.5%": {
                                                "-24": 76
                                            },
                                            "50%": {
                                                "-12": 88
                                            },
                                            "62.5%": {
                                                "-6": 94
                                            },
                                            "75%": {
                                                "0": 100
                                            },
                                            "87.5%": {
                                                "+6": 106
                                            },
                                            "max": {
                                                "+12": 112
                                            }
                                        },
                                        "origin": "auto",
                                        "logScale": false,
                                        "precision": 2,
                                        "meter": false,
                                        "address": "/AUX4/fader",
                                        "preArgs": [],
                                        "target": [],
                                        "label": "AUX4",
                                        "value": "",
                                        "css": "",
                                        "pips": true,
                                        "input": true,
                                        "dashed": false,
                                        "doubleTap": false,
                                        "touchAddress": "",
                                        "meterAddress": ""
                                    },
                                    {
                                        "type": "toggle",
                                        "id": "/AUX4/mute",
                                        "linkId": "",
                                        "label": "MUTE",
                                        "height": "10%",
                                        "color": "red",
                                        "css": "",
                                        "on": 1,
                                        "off": 0,
                                        "value": "",
                                        "precision": 2,
                                        "address": "/AUX4/mute",
                                        "preArgs": [],
                                        "target": [],
                                        "doubleTap": false,
                                        "led": false
                                    }
                                ],
                                "height": "100%",
                                "scroll": true,
                                "stretch": false,
                                "border": true,
                                "spacing": 0,
                                "variables": "@{parent.variables}",
                                "_style": "style",
                                "_children": "children",
                                "_geometry": "geometry",
                                "_panel": "panel",
                                "layout": "",
                                "value": "",
                                "_osc": "osc",
                                "precision": 0,
                                "address": "auto",
                                "preArgs": [],
                                "target": [],
                                "tabs": []
                            }
                        ],
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_32",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "tabs": [],
                        "scroll": true
                    },
                    {
                        "id": "tab_33",
                        "label": "AUX CHANNELS",
                        "type": "tab",
                        "color": "auto",
                        "css": "",
                        "layout": "",
                        "spacing": 0,
                        "value": "",
                        "precision": 0,
                        "address": "/tab_33",
                        "preArgs": [],
                        "target": [],
                        "variables": "@{parent.variables}",
                        "widgets": [],
                        "tabs": [],
                        "scroll": true
                    }
                ],
                "id": "tab_27",
                "type": "tab",
                "color": "auto",
                "css": "",
                "layout": "",
                "spacing": 0,
                "value": "",
                "precision": 0,
                "address": "/tab_27",
                "preArgs": [],
                "target": [],
                "variables": "@{parent.variables}",
                "widgets": [],
                "scroll": true
            },
            {
                "label": "MASTERS",
                "id": "tab_34",
                "widgets": [
                    {
                        "type": "strip",
                        "top": 0,
                        "left": 0,
                        "id": "G12",
                        "label": "auto",
                        "width": "20%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/G12/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/G12/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/G12/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/G12/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/G12/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/G12/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "G12",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/G12/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/G12/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": 0,
                        "left": "20%",
                        "id": "G34",
                        "label": "auto",
                        "width": "20%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/G34/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/G34/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/G34/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/G34/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/G34/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "address": "/G34/fader",
                                "preArgs": [],
                                "target": [],
                                "label": "G34",
                                "value": "",
                                "css": "",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/G34/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/G34/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": 0,
                        "left": "40%",
                        "id": "G56",
                        "label": "auto",
                        "width": "20%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/G56/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/G56/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/G56/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/G56/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/G56/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "preArgs": [],
                                "target": [],
                                "label": "G56",
                                "value": "",
                                "css": "",
                                "address": "/G56/fader",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/G56/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/G56/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": 0,
                        "left": "60%",
                        "id": "G78",
                        "label": "auto",
                        "width": "20%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/G78/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/G78/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/G78/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/G78/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/G78/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "preArgs": [],
                                "target": [],
                                "label": "G78",
                                "value": "",
                                "css": "",
                                "address": "/G78/fader",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/G78/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/G78/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    },
                    {
                        "type": "strip",
                        "top": 0,
                        "left": "80%",
                        "id": "L-R",
                        "label": "auto",
                        "width": "20%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "widgets": [
                            {
                                "type": "fader",
                                "id": "/L-R/pan",
                                "linkId": "",
                                "label": "PAN",
                                "unit": "",
                                "height": "20%",
                                "color": "auto",
                                "compact": true,
                                "css": "",
                                "snap": false,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "L": -45
                                    },
                                    "max": {
                                        "R": 45
                                    }
                                },
                                "origin": 0,
                                "value": "",
                                "logScale": false,
                                "precision": 2,
                                "address": "/L-R/pan",
                                "preArgs": [],
                                "target": [],
                                "alignRight": false,
                                "horizontal": true,
                                "meter": false,
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/L-R/solo",
                                "linkId": "",
                                "label": "SOLO",
                                "height": "10%",
                                "color": "yellow",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/L-R/solo",
                                "preArgs": [],
                                "target": [],
                                "css": "",
                                "doubleTap": false,
                                "led": false
                            },
                            {
                                "type": "fader",
                                "id": "/L-R/fader",
                                "linkId": "",
                                "unit": "",
                                "height": "60%",
                                "alignRight": false,
                                "horizontal": false,
                                "compact": false,
                                "color": "auto",
                                "snap": true,
                                "spring": false,
                                "range": {
                                    "min": {
                                        "inf": 0
                                    },
                                    "12.5%": {
                                        "-54": 46
                                    },
                                    "25%": {
                                        "-36": 64
                                    },
                                    "37.5%": {
                                        "-24": 76
                                    },
                                    "50%": {
                                        "-12": 88
                                    },
                                    "62.5%": {
                                        "-6": 94
                                    },
                                    "75%": {
                                        "0": 100
                                    },
                                    "87.5%": {
                                        "+6": 106
                                    },
                                    "max": {
                                        "+12": 112
                                    }
                                },
                                "origin": "auto",
                                "logScale": false,
                                "precision": 2,
                                "meter": false,
                                "preArgs": [],
                                "target": [],
                                "label": "L-R",
                                "value": "",
                                "css": "",
                                "address": "/L-R/fader",
                                "pips": true,
                                "input": true,
                                "dashed": false,
                                "doubleTap": false,
                                "touchAddress": "",
                                "meterAddress": ""
                            },
                            {
                                "type": "toggle",
                                "id": "/L-R/mute",
                                "linkId": "",
                                "label": "MUTE",
                                "height": "10%",
                                "color": "red",
                                "css": "",
                                "on": 1,
                                "off": 0,
                                "value": "",
                                "precision": 2,
                                "address": "/L-R/mute",
                                "preArgs": [],
                                "target": [],
                                "doubleTap": false,
                                "led": false
                            }
                        ],
                        "height": "100%",
                        "scroll": true,
                        "stretch": false,
                        "border": true,
                        "spacing": 0,
                        "variables": "@{parent.variables}",
                        "_style": "style",
                        "_children": "children",
                        "_geometry": "geometry",
                        "_panel": "panel",
                        "layout": "",
                        "value": "",
                        "_osc": "osc",
                        "precision": 0,
                        "address": "auto",
                        "preArgs": [],
                        "target": [],
                        "tabs": []
                    }
                ],
                "type": "tab",
                "color": "auto",
                "css": "",
                "layout": "",
                "spacing": 0,
                "value": "",
                "precision": 0,
                "address": "/tab_34",
                "preArgs": [],
                "target": [],
                "variables": "@{parent.variables}",
                "tabs": [],
                "scroll": true
            },
            {
                "label": "REC/PLAY",
                "id": "tab_35",
                "widgets": [
                    {
                        "type": "push",
                        "top": 0,
                        "left": 0,
                        "id": "/rec-stop",
                        "linkId": "",
                        "label": "REC/STOP",
                        "width": "50%",
                        "height": "50%",
                        "color": "red",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "norelease": false,
                        "precision": 2,
                        "address": "/rec-stop",
                        "preArgs": [],
                        "target": []
                    },
                    {
                        "type": "push",
                        "top": "0%",
                        "left": "50%",
                        "id": "LOAD FILE",
                        "linkId": "",
                        "label": "LOAD FILE",
                        "width": "50%",
                        "height": "50%",
                        "color": "red",
                        "css": "",
                        "on": 1,
                        "off": 1,
                        "norelease": false,
                        "precision": 2,
                        "address": "/loadaudio",
                        "preArgs": [],
                        "target": []
                    },
                    {
                        "type": "push",
                        "top": "50%",
                        "left": "0%",
                        "id": "/play-stop",
                        "linkId": "",
                        "label": "PLAY/STOP",
                        "width": "50%",
                        "height": "50%",
                        "color": "green",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "norelease": false,
                        "precision": 2,
                        "address": "/play-stop",
                        "preArgs": [],
                        "target": []
                    },
                    {
                        "type": "push",
                        "top": "50%",
                        "left": "50%",
                        "id": "INPUT SELECTOR",
                        "linkId": "",
                        "width": "50%",
                        "height": "50%",
                        "color": "blue",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "norelease": false,
                        "precision": 2,
                        "address": "/playrec/player",
                        "preArgs": [],
                        "target": [],
                        "label": "INPUT SELECTOR"
                    }
                ],
                "type": "tab",
                "color": "auto",
                "css": "",
                "layout": "",
                "spacing": 0,
                "value": "",
                "precision": 0,
                "address": "/tab_35",
                "preArgs": [],
                "target": [],
                "variables": "@{parent.variables}",
                "tabs": [],
                "scroll": true
            },
            {
                "label": "CONFIG",
                "id": "tab_36",
                "widgets": [
                    {
                        "type": "push",
                        "top": "0%",
                        "left": "0%",
                        "id": "/dump",
                        "linkId": "",
                        "label": "ACTUALIZAR",
                        "width": "40%",
                        "height": "50%",
                        "color": "auto",
                        "css": "",
                        "on": 1,
                        "off": 1,
                        "norelease": false,
                        "precision": 2,
                        "address": "/dump",
                        "preArgs": [],
                        "target": []
                    },
                    {
                        "type": "fader",
                        "id": "/solo/fader",
                        "linkId": "",
                        "unit": "",
                        "width": "20%",
                        "height": "70%",
                        "alignRight": false,
                        "horizontal": false,
                        "compact": false,
                        "color": "auto",
                        "snap": true,
                        "spring": false,
                        "range": {
                            "min": {
                                "inf": 0
                            },
                            "12.5%": {
                                "-48": 52
                            },
                            "25%": {
                                "-36": 64
                            },
                            "37.5%": {
                                "-32": 70
                            },
                            "50%": {
                                "-24": 76
                            },
                            "62.5%": {
                                "-18": 82
                            },
                            "75%": {
                                "-12": 88
                            },
                            "87.5%": {
                                "-6": 94
                            },
                            "max": {
                                "0": 100
                            }
                        },
                        "origin": "auto",
                        "logScale": false,
                        "precision": 2,
                        "meter": false,
                        "preArgs": [],
                        "target": [],
                        "label": "SOLO",
                        "value": "",
                        "css": "",
                        "address": "/solo/fader",
                        "top": "30%",
                        "left": "80%",
                        "pips": true,
                        "input": true,
                        "dashed": false,
                        "doubleTap": false,
                        "touchAddress": "",
                        "meterAddress": ""
                    },
                    {
                        "type": "switch",
                        "top": "0%",
                        "left": "80%",
                        "id": "SOLO",
                        "linkId": "",
                        "label": "auto",
                        "width": "20%",
                        "height": "30%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "values": {
                            "PFL": 0,
                            "AFL": 1,
                            "APL": 2
                        },
                        "value": "",
                        "precision": 2,
                        "address": "/solo/control",
                        "preArgs": [],
                        "target": []
                    },
                    {
                        "type": "switch",
                        "top": "50%",
                        "left": "0%",
                        "id": "AUX1",
                        "linkId": "",
                        "label": "auto",
                        "width": "20%",
                        "height": "50%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "values": {
                            "PRE-FADER": 0,
                            "POST-FADER": 1
                        },
                        "value": "",
                        "precision": 2,
                        "address": "/aux/AUX1/control",
                        "preArgs": [],
                        "target": []
                    },
                    {
                        "type": "switch",
                        "top": "50%",
                        "left": "20%",
                        "id": "AUX2",
                        "linkId": "",
                        "label": "auto",
                        "width": "20%",
                        "height": "50%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "values": {
                            "PRE-FADER": 0,
                            "POST-FADER": 1
                        },
                        "value": "",
                        "precision": 2,
                        "address": "/aux/AUX2/control",
                        "preArgs": [],
                        "target": []
                    },
                    {
                        "type": "switch",
                        "top": "50%",
                        "left": "40%",
                        "id": "AUX3",
                        "linkId": "",
                        "label": "auto",
                        "width": "20%",
                        "height": "50%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "values": {
                            "PRE-FADER": 0,
                            "POST-FADER": 1
                        },
                        "value": "",
                        "precision": 2,
                        "address": "/aux/AUX3/control",
                        "preArgs": [],
                        "target": []
                    },
                    {
                        "type": "switch",
                        "top": "50%",
                        "left": "60%",
                        "id": "AUX4",
                        "linkId": "",
                        "label": "auto",
                        "width": "20%",
                        "height": "50%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "values": {
                            "PRE-FADER": 0,
                            "POST-FADER": 1
                        },
                        "value": "",
                        "precision": 2,
                        "address": "/aux/AUX4/control",
                        "preArgs": [],
                        "target": []
                    },
                    {
                        "type": "switch",
                        "top": "0%",
                        "left": "60%",
                        "id": "VU-METERS",
                        "linkId": "",
                        "label": "auto",
                        "width": "20%",
                        "height": "50%",
                        "horizontal": false,
                        "color": "auto",
                        "css": "",
                        "values": {
                            "PRE-FADER": 0,
                            "POST-FADER": 1
                        },
                        "value": "",
                        "precision": 2,
                        "address": "/vu_control",
                        "preArgs": [],
                        "target": []
                    }
                ],
                "type": "tab",
                "color": "auto",
                "css": "",
                "layout": "",
                "spacing": 0,
                "value": "",
                "precision": 0,
                "address": "/tab_36",
                "preArgs": [],
                "target": [],
                "variables": "@{parent.variables}",
                "tabs": [],
                "scroll": true
            }
        ],
        "color": "auto",
        "css": "",
        "value": "",
        "precision": 0,
        "address": "/root",
        "preArgs": [],
        "target": [],
        "variables": {},
        "id": "root",
        "scroll": true,
        "label": false
    }
]