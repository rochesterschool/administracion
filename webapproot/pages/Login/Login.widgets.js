Login.widgets = {
	layoutBox: ["wm.Layout", {"height":"100%"}, {}, {
		panel1: ["wm.Panel", {"height":"151px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"center","verticalAlign":"top"}, {}, {
			picture1: ["wm.Picture", {"height":"100%","width":"535px","border":"0","source":"resources/LOGO%20APRENDOZ.jpg","aspect":"h"}, {}]
		}],
		loginMainPanel: ["wm.Panel", {"height":"280px","layoutKind":"left-to-right","padding":"10"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_StyleFirefoxCurved4px","wm_Border_StyleSolid","wm_Border_Size1px","wm_Border_ColorLightGray","wm_FontSizePx_14px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"width":"390px","border":"3","padding":"10","borderColor":"#cd0000"}, {}, {
				usernameInput: ["wm.Editor", {"caption":"Usuario","height":"28px","captionSize":"100px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña","height":"28px","captionSize":"100px"}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"45px","layoutKind":"left-to-right","horizontalAlign":"right","padding":"4"}, {}, {
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_TextDecoration_Bold"]},"height":"100%","width":"80px","caption":"Acceder","border":"0","margin":"0"}, {"onclick":"loginButtonClick"}]
				}],
				spacer3: ["wm.Spacer", {"height":"30px"}, {}],
				loginErrorMsg: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"100%","border":"0","caption":" ","align":"center"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			spacer4: ["wm.Spacer", {"width":"100%"}, {}]
		}]
	}]
}