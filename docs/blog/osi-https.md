# HTTPS 协议常用知识点总结

HTTPS 是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版。

## 流程分析

下图是一次 HTTPS 请求的流程图，我们一起来分析一下。

![https流程图](https.png)

- 1、客户端请求 HTTPS 链接，并发送自己支持的**一套加密规则**和**一个随机数（Client random）**给服务器。
- 2、服务器需要安装好证书（其实就是一对公钥和私钥）。
- 3、服务端确认双方使用的加密方法，并返回一组加密组件和通过 hash 算法签名的**数字证书**，和一个服务器端生成的**随机数（Server random）**。
- 4、客户端验证证书。
  - 使用 hash 检查证书是否被篡改。
  - 验证失败，弹出提示，证书存在问题，拒绝请求。
  - 验证成功，生成新**随机数（Premaster secret）**。
- 5、使用证书公钥将随机值加密后传给服务端。
- 6、服务端用私钥解密消息内容，获得**随机数（Premaster secret）**。
- 7、服务端根据约定的加密方法，使用前面的三个随机数（Client random，Server random，Premaster secret）生成**对话密钥（session key）**，并使用**对话密钥（session key）**加密传输内容，发送给客户端。
- 8、客户端使用同样的算法获取**对话密钥（session key）**，并使用**对话密钥（session key）**解密传输内容。
- 9、之后，客户端和服务器端通过**对话密钥（session key）** 作为对称加密 key，相互传输数据。

## Hash 检测

在秘钥协商的过程中，结合流程图 步骤 2~3 ，如果证书在传递过程中被篡改了怎么办？这就需要检验证书的合法性，一般使用数字签名来实现。

![https流程图](https-hash1.png)

- 将服务器公钥进行 Hash 加密。
- 将加密后的结果再通过 CA（认证中心）私钥加密，生成数字签名。
- 将服务器公钥和数字签名一并发给客户端。

![https流程图](https-hash2.png)

- 客户端使用同样的 Hash 算法加密公钥 -> Hash 加密后的服务器公钥。
- 使用 CA 公钥解密数字签名 -> Hash 加密后的服务器公钥。
- 通过比对 Hash 加密后的服务器公钥是否一致，保证代码证书有效。

## HTTPS 如何保证安全

HTTPS 引入了加密以及身份验证机制。

- 在传输过程中的内容都是经过加密的。
- 引入了证书的概念，保证客户端通信的服务器是真正的服务器，而不是中间人。

在图中可以看到，步骤中间人只可能在 1，3，5，7 时去劫持请求。

- 劫持请求 1 和 3：劫持请求到另一个服务器，或修改服务器返回的证书，都会在步骤 4 中验证证书失败，故攻击失效。
- 劫持请求 5：证书私钥在服务器端，只有服务器端才能解密，中间人没有私钥，故无法破解内容。
- 劫持请求 7：对称加密的密钥存在客户端和服务端，中间人没有密钥，故无法破解内容。

## 小结

HTTPS 优点

## 相关链接

- [一个故事讲完 HTTPS](https://mp.weixin.qq.com/s/StqqafHePlBkWAPQZg3NrA)
