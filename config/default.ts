export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-api-tutorial",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICWgIBAAKBgFG4MQSp733RWdiDpGYxkyk9kIZaQNXLJVISMFthL1jKEbc1wymr
  paYR15jR59YVbnSyL2WGFXaU4xPdW3j16CWrGc602EUNsHiSCwq9VE6Ydev77gnc
  ++2x37zsbVuy0OdYo4RfAm045vfU6NirslB78v7s3G1ISglDdjLjEXxTAgMBAAEC
  gYAFPLCng9x9S7VeUtFuWy77LZ7dfVs6WFKD9/ZxZMEMB6cq/p8LRJzRD8OpX4pk
  BeuWPvUapIUrnE8RLtZ14gyGistwEWipPr03X3HfkbPQBPN4RMIE95fjgIGDJphg
  xDVIxHEwmSp2K4+TR/B4s5gIX6MIw+VdVviqqlNflXsSwQJBAKNcUmTYzt6mHthr
  CFBZqA3UMiv8nCruFwu2aWlIa3f13RQceIqOkAYMJqPfQ/YnvUlXsU5nqQJlEdi5
  //PbtLUCQQCAD7f+hWUnVRI/pPIdx1h51wu36Qio+x7K6jNSp6jCC3+tu+OzmHnY
  S4caYNNdPM0+luPe75JFhz5tSvR3lNnnAkA67wR+g0TmR/Hay4o9Sor5KjNLcR95
  0VkZDZ6rr8etiFJQfhDyk4nb1Khf+BzRgfakrfE2QulTBtlQYZG4DOv9AkBWckXy
  OnoeIv8+l0oZcAf5t4DhlR2TdHFE6PPcR/FTjA+UZ9E92x/lMpbw54vG1NR3+8O3
  KmHDLZimjoKYdpLhAkBHQ/neVUJge1Bbhd7Zh3IZx/jkAuoMBqZupQWhqtPp1Dxx
  wLp810EZ5Y4E6phCNLc6L5SW6XdNdg9A46QxMwEC
  -----END RSA PRIVATE KEY-----`,
  refreshTokenPublicKey: `-----BEGIN PUBLIC KEY-----
  MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFG4MQSp733RWdiDpGYxkyk9kIZa
  QNXLJVISMFthL1jKEbc1wymrpaYR15jR59YVbnSyL2WGFXaU4xPdW3j16CWrGc60
  2EUNsHiSCwq9VE6Ydev77gnc++2x37zsbVuy0OdYo4RfAm045vfU6NirslB78v7s
  3G1ISglDdjLjEXxTAgMBAAE=
  -----END PUBLIC KEY-----`,
};
