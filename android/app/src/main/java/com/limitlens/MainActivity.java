// package com.limitlens;

// import com.getcapacitor.BridgeActivity;

// public class MainActivity extends BridgeActivity {}

package ai.limitlens.myapp;

import android.content.Intent;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginHandle;
import com.getcapacitor.PluginManager;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Additional plugins you've installed go here
        // Ex: add(ExamplePlugin.class);

        // Handle the intent for the custom scheme
     
        handleIntent(getIntent());
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        handleIntent(intent);
    }

    private void handleIntent(Intent intent) {
        if (intent != null && intent.getData() != null) {
            String scheme = intent.getData().getScheme();
            String host = intent.getData().getHost();

            if ("myapp".equals(scheme) && "callback".equals(host)) {
                // Handle the callback URL

                String token = intent.getData().getQueryParameter("token");
                String uuid = intent.getData().getQueryParameter("uuid");

                // Process the token and uuid as needed
            }
        }
    }
}
