1、用户注册
```markdown
POST /users
Body: {
  "username": "string",
  "email": "string",
  "password": "string"
}

curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"username": "testuser", "email": "test@example.com", "password": "password123"}'
```

2、用户登录
```markdown
POST /auth/login
Body: {
  "username": "string",
  "password": "string"
}

curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username": "testuser", "password": "password123"}' | cat
```

3、获取用户列表（需要认证）
```markdown
GET /users
Headers: {
  "Authorization": "Bearer your-jwt-token"
}

curl -X GET http://localhost:3000/users -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwic3ViIjoxLCJpYXQiOjE3NDM5NTI1MTksImV4cCI6MTc0NDAzODkxOX0.2rkPPVWh9cnOD5IiSlnQOf9wukwakoTTtdLGr6xC1PI" | cat
```

4、获取单个用户（需要认证）
```markdown
GET /users/:id
Headers: {
  "Authorization": "Bearer your-jwt-token"
}
```

5、更新用户信息（需要认证）
```markdown
PATCH /users/:id
Headers: {
  "Authorization": "Bearer your-jwt-token"
}
Body: {
  "username": "string",
  "email": "string",
  "password": "string"
}
```

6、删除用户（需要认证）
```markdown
DELETE /users/:id
Headers: {
  "Authorization": "Bearer your-jwt-token"
}
```

安全特性：
所有密码都使用 bcrypt 进行加密存储
JWT 令牌用于认证
路由保护确保只有认证用户才能访问特定端点
输入验证确保数据的完整性
您可以根据需要扩展这个基础项目：
添加更多的用户属性
实现角色和权限系统
添加邮件验证功能
实现密码重置功能
添加用户头像上传功能
实现用户会话管理