"use strict";
{
    const C3 = globalThis.C3;

    C3.Plugins.EMI_INDO_AnalyticsBasic.Instance = class AnalyticsBasicInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }

            if (typeof firebase == 'undefined') {
                return;
            }

        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }

    };
}