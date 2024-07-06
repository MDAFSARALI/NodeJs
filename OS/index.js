const os = require('os');



console.log("CPU Architecture : ", os.arch());
// x64
console.log("Free Memory : ", os.freemem());
// Answer in be byte : 1002110976
console.log("Total memory :", os.totalmem());
// Answer in byte :7887228928
console.log("Network Interfaces : ", os.networkInterfaces());
console.log("Network Interfaces : ", JSON.stringify(os.networkInterfaces()));
/*
Network Interfaces :  {
  'Wi-Fi': [
    {
      address: 'fe80::afe:683:8215:3f83',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '38:d5:7a:03:62:a5',
      internal: false,
      cidr: 'fe80::afe:683:8215:3f83/64',
      scopeid: 17
    },
    {
      address: '192.168.0.192',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '38:d5:7a:03:62:a5',
      internal: false,
      cidr: '192.168.0.192/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}
*/

console.log("Temporary directory :", os.tmpdir());
// Temporary directory : C:\Users\User\AppData\Local\Temp

console.log("Endianness",os.endianness());
// Ans : LE
console.log("hostname",os.hostname());
// Ans : Afsar-Pavilion
console.log("type",os.type());
// Ans: Windows_NT
console.log("platform",os.platform());
// Ans: win32
console.log("release",os.release());
// Ans: 10.0.22631









