const EmailTemplates = require('../modules/emailTpl');

module.exports = async () => {
	await EmailTemplates.remove({});
	console.log('remove EmailTpl success');

	const templates = [];

	// 变量为
	// {{username}} 用户名
	// {{password}} 密码
	// {{year}} 当年
	// {{appname}} 网站名字
	templates.push({
		name: 'welcomeRegister',
		content: `<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  
  <body>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff; padding-top: 20px; color: #434245; width: 80%; margin: 60px auto; max-width: 600px; border-radius:8px; border:1px solid lightgray; box-shadow: 2px 2px 5px 1px lightgray; ">
      <tbody>
        <tr>
          <td valign="top" class="sm_full_width" style="margin: 60px auto; width: 600px; display: block;">
            <div class="sm_no_padding">
              <table style="width: 100%; color: #434245;" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td style="box-sizing: border-box;">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                            <td>
                              <h1 style="font-size: 30px; padding-right: 30px; padding-left: 230px; color: black; font-family: PingFangSC-Medium; ">恭喜您注册成功</h1>
                              <p style="font-size: 17px; padding-right: 30px; padding-left: 60px;">
                                <br class="Apple-interchange-newline">
                                <span style="color: rgb(34, 34, 34); font-family: PingFangSC-Light; font-size: 19px; text-align: center;">用户名为: {{username}}</span></p>
                              <p style="font-size: 17px; padding-right: 30px; padding-left: 60px;">
                                <br class="Apple-interchange-newline">
                                <span style="color: rgb(34, 34, 34); font-family: PingFangSC-Light; font-size: 19px; text-align: center;">密码为: {{password}}</span></p>
                              <p style="font-size: 17px; padding-right: 30px; padding-left: 60px;">
                                <span style="color: rgb(34, 34, 34); font-family: PingFangSC-Light; font-size: 19px;">我们收到了你重置密码的申请，请点击下方按钮进行重置。</span></p>
                              <p style="font-size: 17px; padding-right: 30px; padding-left: 60px;">
                                <span style="color: rgb(34, 34, 34); font-family: PingFangSC-Light; font-size: 19px;">
                                  <br></span>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td class="email_footer" style="padding: 0 30px 40px; border-top: 1px solid #E1E1E4; line-height: 24px; font-size: 15px; color: #A0A0A2; text-align: center; width: 100%;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" align="center" style="margin-top: 20px; background-color: white; color: #989EA6;">
              <tbody>
                <tr>
                  <td>
                    <span style="display: block;text-align: center;">
                      <em>Copyright © {{year}} {{appname}}, All rights reserved.</em>
                      <span style="font-size: 15px; text-align: center;">&nbsp;</span></span>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="overflow:hidden;">
            <div style="-moz-border-radius: 50px 50px 0 0;-webkit-border-radius: 50px 50px 0 0;border-radius: 70px 70px 0 0; width: 140px; height: 70px; background: #86d4ff; float:left; margin:0 0 -50px 10px; "></div>
            <div style="-moz-border-radius: 50px 50px 0 0;-webkit-border-radius: 50px 50px 0 0;border-radius: 70px 70px 0 0; width: 140px; height: 70px; background: #86d4ff; float:left; margin:0 0 -50px -30px; "></div>
            <div style="-moz-border-radius: 50px 50px 0 0;-webkit-border-radius: 50px 50px 0 0;border-radius: 70px 70px 0 0; width: 140px; height: 70px; background: #86d4ff; float:left; margin:0 0 -50px -30px; "></div>
            <div style="-moz-border-radius: 50px 50px 0 0;-webkit-border-radius: 50px 50px 0 0;border-radius: 70px 70px 0 0; width: 140px; height: 70px; background: #86d4ff; float:left; margin:0 0 -50px -30px; "></div>
            <div style="-moz-border-radius: 50px 50px 0 0;-webkit-border-radius: 50px 50px 0 0;border-radius: 70px 70px 0 0; width: 140px; height: 70px; background: #86d4ff; float:left; margin:0 0 -50px -30px; "></div>
          </td>
        </tr>
      </tbody>
    </table>
  </body>

</html>
`,
	});

	for (const data of templates) {
		const template = new EmailTemplates(data);
		await template.save();
	}

	console.log('seed EmailTpl success');
};
