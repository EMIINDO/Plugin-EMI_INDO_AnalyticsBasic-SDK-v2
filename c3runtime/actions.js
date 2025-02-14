"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_AnalyticsBasic.Acts = {
        async LogEvent(name)
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
            else
            {};

            await firebase.analytics().logEvent(name);
        }
    };
}