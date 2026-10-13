# SlimPDF 免费测试版

Windows 本地 PDF 压缩工具。添加文件、选择输出目录、设置每份目标大小，再查看实际处理结果。文件在本机处理，输出单独副本，原文件保留。

当前为免费测试版，由 YanYan 发布。已在独立 Windows 11 x64 沙盒验证启动和有限合成样本；Windows 10及其他系统尚未独立验收。

## 下载与运行

[下载 Windows 测试版](https://github.com/yanbaobao010913-beep/SlimPDF-downloads/releases/tag/beta-20261013)

在页面的 **Assets** 中选择 `SlimPDF-beta-20261013-win-x64.zip`。普通使用只需此程序ZIP；其余源码附件为第三方组件的对应材料。GitHub自动列出的“Source code”是本下载仓的文档，不是可运行程序，也不包含SlimPDF原创源码。

1. 完整解压ZIP，打开SlimPDF文件夹。
2. 双击`启动.bat`，阅读首次显示的许可文本，决定同意后启动。
3. 添加PDF，选择输出目录和目标大小，点击开始。
4. 查看“达标 / 未达标 / 跳过 / 错误”结果，检查输出文件。
5. 结束使用后双击`停止.bat`。

不需要另装Python。目标大小不保证达标；背景和插图压缩可能有损，“更强压缩”默认关闭。请保留原文件，并检查重要输出。实际文件列表通过“添加文件”按钮选择，当前不支持浏览器拖入文件。

## 反馈

[提交测试反馈](https://github.com/yanbaobao010913-beep/SlimPDF-downloads/issues/new?template=feedback.md)（需要GitHub账号）

说明测试版本、Windows版本、操作步骤、实际/预期结果和脱敏后的错误文字。默认不要上传PDF原件、私人截图、完整路径或完整日志。反馈公开可见。

## 许可与第三方源码

[原创使用许可](LICENSE.txt)、[Microsoft组件说明](licenses/MICROSOFT-RUNTIME-NOTICE.txt)、[第三方组件声明](THIRD-PARTY-NOTICES.md)。SlimPDF原创源码未开源；第三方组件按各自许可证提供，LGPL修改、调试、替换和重新链接权利不受原创许可限制。

同一发布页提供`lxml-iconv-corresponding-sources-20261012.zip`及`pikepdf-10.16.0.tar.gz`，包含对应源码、许可和已验证的重建/替换说明。`SHA256SUMS.txt`用于核对附件是否完整。

本仓仅存发布说明、许可文本和反馈模板。没有“任意PDF无损压到2MB”或“普遍领先竞品”的承诺；下载量也不代表已完成真实用户验证。


## 测试说明与操作演示

[查看 SlimPDF 测试说明页](https://yanbaobao010913-beep.github.io/SlimPDF-downloads/)：适用场景、已知限制、三步真实操作截图和反馈入口。截图使用合成样本，不能代表普遍压缩效果。
