## object2css

一款 vscode 插件，将选中的 object 进行转换为 css

## 下载

已经上架：[marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=menglinz986.object2css)

或者在 vscode 扩展中直接搜索 object2css 安装即可

## 快捷键

mac: `command + 4`

windows: `ctrl + 4`

如有冲突，用户可自定义快捷键

## 功能

选中需要转换的 object 后，按下快捷键（或右键菜单选择 object2css）即可转换为 css

例：

```css
{
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto 10px',
    paddingBottom: '10px',
  }
```

结果：

```css
{"display": "flex", "justify-content": "center", "margin": "0 auto 10px", "padding-bottom": "10px"}
```

## License

MIT © Richard McRichface
