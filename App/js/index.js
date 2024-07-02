// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label13")
                .setLeft("14.476190476190476em")
                .setTop("3.8095238095238093em")
                .setWidth("26.057142857142857em")
                .setHeight("3.5047619047619047em")
                .setCaption("HI")
                .setFontColor("#000080")
                .setFontSize("40px")
                .setFontFamily("comic sans MS")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button14")
                .setLeft("12.952380952380953em")
                .setTop("13.714285714285714em")
                .setCaption("PLAY")
                .setFontColor("#8B0000")
                .setFontFamily("<style> @import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap'); </style>")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            undefined,
                            {
                                "" : null
                            }
                        ],
                        "method" : "mailTo",
                        "event" : 1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});