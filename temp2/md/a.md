# 接口文档示例

## 接口名称
获取用户信息

## 接口描述
该接口用于获取用户的基本信息。

## 请求地址
`GET /api/user/{userId}`

## 请求参数
| 参数名   | 类型   | 是否必填 | 描述     |
| -------- | ------ | -------- | -------- |
| userId   | string | 是       | 用户ID   |
| include  | string | 否       | 需要包含的额外信息 |

## 响应参数
| 参数名      | 类型   | 描述             |
| ----------- | ------ | ---------------- |
| id          | string | 用户ID           |
| name        | string | 用户名           |
| email       | string | 电子邮件地址     |
| age         | number | 年龄             |
| address     | object | 地址信息         |
| address.city| string | 城市             |
| address.zip | string | 邮政编码         |

## 请求示例
