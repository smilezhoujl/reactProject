<h1 align="center">Ant Design Pro学习进阶</h1>

### 一、背景
前端项目这几年快速发展，出现很多流行框架 ： Vue 、 React 、 Angular

```javascript
// 核心概念：单向数据流
// 主要目标：实现数据的全局管理、事件的统一定义、事件分发
                 _________               ____________               ___________
                |         |             |            |             |           |
                | Action  |------------▶| Dispatcher |------------▶| callbacks |
                |_________|             |____________|             |___________|
                     ▲                                                   |
                     |                                                   |
                     |                                                   |
 _________       ____|_____                                          ____▼____
|         |◀----|  Action  |                                        |         |
| Web API |     | Creators |                                        |  Store  |
|_________|----▶|__________|                                        |_________|
                     ▲                                                   |
                     |                                                   |
                 ____|________           ____________                ____▼____
                |   User       |         |   React   |              | Change  |
                | interactions |◀--------|   Views   |◀-------------| events  |
                |______________|         |___________|              |_________|

```
### 二、实践
基于 Antd Pro 开箱即用的中台前端/设计解决方案 ，尝试
- 快速搭建企业中台管理系统
- 前后端分离的技术栈 (react javascript ant-design admin-template html antd Spring boot)

实现功能
##### 价格带销售分析
 ![avatar](http://42.194.140.28/priceImage.png?raw=true)
 
##### 快抢活动价格报表
 ![avatar](http://42.194.140.28/kqReport.png?raw=true)
 
##### 快抢活动监控（图+表数据联动）
 ![avatar](http://42.194.140.28/kqdata.png?raw=true)
 
##### 活动价格趋势
 ![avatar](http://42.194.140.28/priceFeature.png?raw=true) 
 
##### 商品三级分类分布
 ![avatar](http://42.194.140.28/category.png?raw=true) 
