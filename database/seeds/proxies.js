exports.seed = function(knex, Promise) {
  return knex("accounts")
    .del()
    .then(function() {
      return knex("accounts").insert([
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.918Z",
          lanIP: "10.0.0.17",
          oldBrowserIP: "1.1.1.1",
          port: "5517",
          proxyIP: "3.211.74.54",
          proxyServerID: "09c7d39f-9846-4aeb-ade8-77fef160d332",
          resetURL:
            "http://api.proxypi.me/reset/09c7d39f-9846-4aeb-ade8-77fef160d332",
          status: "CREATED",
          vpnIP: "172.30.230.17",
          user_id: 1
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.920Z",
          lanIP: "10.0.0.26",
          oldBrowserIP: "1.1.1.1",
          port: "5526",
          proxyIP: "3.211.74.54",
          proxyServerID: "23a064dd-c18c-4a5b-b2ac-8dea09725504",
          resetURL:
            "http://api.proxypi.me/reset/23a064dd-c18c-4a5b-b2ac-8dea09725504",
          status: "CREATED",
          vpnIP: "172.30.230.26",
          user_id: 1
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.919Z",
          lanIP: "10.0.0.23",
          oldBrowserIP: "1.1.1.1",
          port: "5523",
          proxyIP: "3.211.74.54",
          proxyServerID: "27c94d62-cfef-442a-b051-bfa7f40364a7",
          resetURL:
            "http://api.proxypi.me/reset/27c94d62-cfef-442a-b051-bfa7f40364a7",
          status: "CREATED",
          vpnIP: "172.30.230.23",
          user_id: 1
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.918Z",
          lanIP: "10.0.0.16",
          oldBrowserIP: "1.1.1.1",
          port: "5516",
          proxyIP: "3.211.74.54",
          proxyServerID: "2aaadf7e-bc85-46da-9c88-0583bfa44f0b",
          resetURL:
            "http://api.proxypi.me/reset/2aaadf7e-bc85-46da-9c88-0583bfa44f0b",
          status: "CREATED",
          vpnIP: "172.30.230.16",
          user_id: 1
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.916Z",
          lanIP: "10.0.0.10",
          oldBrowserIP: "1.1.1.1",
          port: "5510",
          proxyIP: "3.211.74.54",
          proxyServerID: "36135527-2158-415f-87a1-cc8a99f51810",
          resetURL:
            "http://api.proxypi.me/reset/36135527-2158-415f-87a1-cc8a99f51810",
          status: "CREATED",
          vpnIP: "172.30.230.10",
          user_id: 1
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.919Z",
          lanIP: "10.0.0.20",
          oldBrowserIP: "1.1.1.1",
          port: "5520",
          proxyIP: "3.211.74.54",
          proxyServerID: "3d335bf5-03ca-4150-a433-6aec8eb65f8d",
          resetURL:
            "http://api.proxypi.me/reset/3d335bf5-03ca-4150-a433-6aec8eb65f8d",
          status: "CREATED",
          vpnIP: "172.30.230.20",
          user_id: 1
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.917Z",
          lanIP: "10.0.0.11",
          oldBrowserIP: "1.1.1.1",
          port: "5511",
          proxyIP: "3.211.74.54",
          proxyServerID: "5677bf76-3bc9-45b0-9189-57096c6c126e",
          resetURL:
            "http://api.proxypi.me/reset/5677bf76-3bc9-45b0-9189-57096c6c126e",
          status: "CREATED",
          vpnIP: "172.30.230.11",
          user_id: 2
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.919Z",
          lanIP: "10.0.0.18",
          oldBrowserIP: "1.1.1.1",
          port: "5518",
          proxyIP: "3.211.74.54",
          proxyServerID: "5fabbeb1-3966-4f3b-bb26-45cf4c0f6f64",
          resetURL:
            "http://api.proxypi.me/reset/5fabbeb1-3966-4f3b-bb26-45cf4c0f6f64",
          status: "CREATED",
          vpnIP: "172.30.230.18",
          user_id: 2
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.920Z",
          lanIP: "10.0.0.29",
          oldBrowserIP: "1.1.1.1",
          port: "5529",
          proxyIP: "3.211.74.54",
          proxyServerID: "61ce51f6-f6fa-477f-b5d6-1862279dd742",
          resetURL:
            "http://api.proxypi.me/reset/61ce51f6-f6fa-477f-b5d6-1862279dd742",
          status: "CREATED",
          vpnIP: "172.30.230.29",
          user_id: 2
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.920Z",
          lanIP: "10.0.0.24",
          oldBrowserIP: "1.1.1.1",
          port: "5524",
          proxyIP: "3.211.74.54",
          proxyServerID: "9cdfe42e-8e2f-4a10-98d1-4dc3adfef78c",
          resetURL:
            "http://api.proxypi.me/reset/9cdfe42e-8e2f-4a10-98d1-4dc3adfef78c",
          status: "CREATED",
          vpnIP: "172.30.230.24",
          user_id: 2
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.918Z",
          lanIP: "10.0.0.13",
          oldBrowserIP: "1.1.1.1",
          port: "5513",
          proxyIP: "3.211.74.54",
          proxyServerID: "a02563df-7ae0-443c-81c1-81923a7441f7",
          resetURL:
            "http://api.proxypi.me/reset/a02563df-7ae0-443c-81c1-81923a7441f7",
          status: "CREATED",
          vpnIP: "172.30.230.13",
          user_id: 2
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.919Z",
          lanIP: "10.0.0.21",
          oldBrowserIP: "1.1.1.1",
          port: "5521",
          proxyIP: "3.211.74.54",
          proxyServerID: "aa41c47f-8bc2-48c1-bb1e-5c2b797dbc36",
          resetURL:
            "http://api.proxypi.me/reset/aa41c47f-8bc2-48c1-bb1e-5c2b797dbc36",
          status: "CREATED",
          vpnIP: "172.30.230.21",
          user_id: 2
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.921Z",
          lanIP: "10.0.0.30",
          oldBrowserIP: "1.1.1.1",
          port: "5530",
          proxyIP: "3.211.74.54",
          proxyServerID: "bc120eaf-5575-42ba-a0ef-a8c552262376",
          resetURL:
            "http://api.proxypi.me/reset/bc120eaf-5575-42ba-a0ef-a8c552262376",
          status: "CREATED",
          vpnIP: "172.30.230.30",
          user_id: 3
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.920Z",
          lanIP: "10.0.0.28",
          oldBrowserIP: "1.1.1.1",
          port: "5528",
          proxyIP: "3.211.74.54",
          proxyServerID: "c0b04e46-6615-4020-b001-784c38c6990d",
          resetURL:
            "http://api.proxypi.me/reset/c0b04e46-6615-4020-b001-784c38c6990d",
          status: "CREATED",
          vpnIP: "172.30.230.28",
          user_id: 3
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.920Z",
          lanIP: "10.0.0.27",
          oldBrowserIP: "1.1.1.1",
          port: "5527",
          proxyIP: "3.211.74.54",
          proxyServerID: "c4966d09-7bf9-40c9-ab7a-bbaec2fd59dc",
          resetURL:
            "http://api.proxypi.me/reset/c4966d09-7bf9-40c9-ab7a-bbaec2fd59dc",
          status: "CREATED",
          vpnIP: "172.30.230.27",
          user_id: 3
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.918Z",
          lanIP: "10.0.0.15",
          oldBrowserIP: "1.1.1.1",
          port: "5515",
          proxyIP: "3.211.74.54",
          proxyServerID: "c7478974-d3b3-4288-a292-3b025a688a55",
          resetURL:
            "http://api.proxypi.me/reset/c7478974-d3b3-4288-a292-3b025a688a55",
          status: "CREATED",
          vpnIP: "172.30.230.15",
          user_id: 3
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.918Z",
          lanIP: "10.0.0.14",
          oldBrowserIP: "1.1.1.1",
          port: "5514",
          proxyIP: "3.211.74.54",
          proxyServerID: "dfd68446-550f-4eb7-bc0e-b729ccba5717",
          resetURL:
            "http://api.proxypi.me/reset/dfd68446-550f-4eb7-bc0e-b729ccba5717",
          status: "CREATED",
          vpnIP: "172.30.230.14",
          user_id: 3
        },
        {
          apn: "vzwinternet",
          browserIP: "1.1.1.1",
          carrier: "Verizon",
          createdAt: "2019-04-18T22:23:42.920Z",
          lanIP: "10.0.0.25",
          oldBrowserIP: "1.1.1.1",
          port: "5525",
          proxyIP: "3.211.74.54",
          proxyServerID: "ef5f2a06-304e-4296-8fa3-dcea88699df6",
          resetURL:
            "http://api.proxypi.me/reset/ef5f2a06-304e-4296-8fa3-dcea88699df6",
          status: "CREATED",
          vpnIP: "172.30.230.25",
          user_id: 3
        }
      ]);
    });
};
