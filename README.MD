# NestJS QQ账号管理系统 API 文档

## 目录
- [认证相关接口](#认证相关接口)
  - [用户注册](#用户注册)
  - [用户登录](#用户登录)
- [QQ账号管理接口](#qq账号管理接口)
  - [创建QQ账号](#创建qq账号)
  - [获取QQ账号列表](#获取qq账号列表)
  - [获取特定QQ账号](#获取特定qq账号)
  - [更新QQ账号](#更新qq账号)
  - [删除QQ账号](#删除qq账号)

## 认证相关接口

### 用户注册

**请求**
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "xinxin",
    "password": "xinxin",
    "email": "xinxin@qq.com"
  }'
```

**响应**
```json
{
  "username": "xinxin",
  "email": "xinxin@qq.com",
  "id": 4,
  "isActive": true,
  "createdAt": "2025-04-13T04:44:07.849Z",
  "updatedAt": "2025-04-13T04:44:07.849Z"
}
```

### 用户登录

**请求**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "xinxin",
    "password": "xinxin"
  }'
```

**响应**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 4,
    "username": "xinxin",
    "email": "xinxin@qq.com"
  }
}
```

## QQ账号管理接口

> 注意：所有 QQ 账号管理接口都需要在请求头中携带 token：
> `-H "Authorization: Bearer your_token_here"`

### 创建QQ账号

**请求**
```bash
curl -X POST http://localhost:3000/qq-accounts \
  -H "Authorization: Bearer your_token_here" \
  -H "Content-Type: application/json" \
  -d '{
    "qqNumber": "123456789",
    "password": "qq123456",
    "description": "我的QQ账号"
  }'
```

**响应**
```json
{
  "id": 1,
  "qqNumber": "123456789",
  "password": "qq123456",
  "description": "我的QQ账号",
  "userId": 4,
  "createdAt": "2025-04-13T04:45:27.448Z",
  "updatedAt": "2025-04-13T04:45:27.448Z"
}
```

### 获取QQ账号列表

**请求**
```bash
curl -H "Authorization: Bearer your_token_here" \
  http://localhost:3000/qq-accounts
```

**响应**
```json
[
  {
    "id": 1,
    "qqNumber": "123456789",
    "password": "qq123456",
    "description": "我的QQ账号",
    "userId": 4,
    "createdAt": "2025-04-13T04:45:27.448Z",
    "updatedAt": "2025-04-13T04:45:27.448Z"
  }
]
```

### 获取特定QQ账号

**请求**
```bash
curl -H "Authorization: Bearer your_token_here" \
  http://localhost:3000/qq-accounts/1
```

**响应**
```json
{
  "id": 1,
  "qqNumber": "123456789",
  "password": "qq123456",
  "description": "我的QQ账号",
  "userId": 4,
  "createdAt": "2025-04-13T04:45:27.448Z",
  "updatedAt": "2025-04-13T04:45:27.448Z"
}
```

### 更新QQ账号

**请求**
```bash
curl -X PUT http://localhost:3000/qq-accounts/1 \
  -H "Authorization: Bearer your_token_here" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "更新后的QQ账号描述",
    "password": "newpassword123"
  }'
```

**响应**
```json
{
  "id": 1,
  "qqNumber": "123456789",
  "password": "newpassword123",
  "description": "更新后的QQ账号描述",
  "userId": 4,
  "createdAt": "2025-04-13T04:45:27.448Z",
  "updatedAt": "2025-04-13T04:48:33.000Z"
}
```

### 删除QQ账号

**请求**
```bash
curl -X DELETE http://localhost:3000/qq-accounts/1 \
  -H "Authorization: Bearer your_token_here"
```

**响应**
```
HTTP/1.1 204 No Content
```

## 安全说明

1. 所有 QQ 账号管理接口都需要认证（JWT token）
2. 用户只能操作自己的 QQ 账号
3. 尝试访问其他用户的账号会返回 403 Forbidden
4. 密码长度至少 6 位

## 错误响应

1. 未授权访问
```json
{
  "message": "Unauthorized",
  "statusCode": 401
}
```

2. 访问其他用户的账号
```json
{
  "message": "您只能访问自己的QQ账号",
  "error": "Forbidden",
  "statusCode": 403
}
```

3. 账号不存在
```json
{
  "message": "QQ账号不存在",
  "error": "Not Found",
  "statusCode": 404
}
```
