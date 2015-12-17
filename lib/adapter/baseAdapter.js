var _ = require('lodash');

function BaseAdapter(config) {
}

BaseAdapter.prototype._metrics = function(app) {
  var metric = {
    'CPU':'CPU',
    'Disk':'Disk',
    'Filesystems':'Filesystems',
    'General':'System',
    'ICMP':'ICMP',
    'Memory':'Memory',
    'netfilter':'Netfilter',
    'Network interfaces':'Network',
    'OS':'System',
    'Performance':'CPU',
    'Processes':'System',
    'Security':'System',
    'socket summary':'Socket',
    'Zabbix agent':'Zabbix',
    'Kat':'Kat',
    'Keepalived':'Keepalived',
    'Libvirtd':'Libvirtd',
    'Logcube':'Logcube',
    'Memcached':'Memcached',
    'Mi':'Mi',
    'Nginx':'Nginx',
    'Nginx Throughput':'Nginx',
    'Nginx Utilization':'Nginx',
    'php-fpm':'Php-fpm',
    'RabbitMQ':'RabbitMQ',
    'Zabbix proxy':'Zabbix',
    'Zabbix server':'Zabbix',
    'ZooKeeper':'ZooKeeper',
    'HardwareError':'Hardware',
    'IPMI Log':'IPMI',
    'IPMI Sensor':'IPMI',
    'MySQL DBA':'Mysql',
    'MySQL':'Mysql',
    'MySQL Slave':'Mysql',
    'Redis':'Redis',
    'Redis Slave':'Redis',
    'Cluster Repl':'Mysql_MGC',
    'Cluster State':'Mysql_MGC',
    'Local Availability':'Mysql_MGC',
    'Node State':'Mysql_MGC',
    'Repl State':'Mysql_MGC',
    'Url':'Url',
    'NTP':'NTP',
    'Sentinel':'Sentinel',
    'Interfaces':'Switch_Network',
    'dubbo-admin':'SOA',
    'influxdb-port':'SOA',
    'Kafka-port':'SOA',
    'soa-admin':'SOA',
    'soa-api':'SOA',
    'soa-datatask':'SOA',
    'soa-monitor':'SOA',
    'soa-registry-portal':'SOA',
    'Zookeeper-port':'SOA',
    'Other': 'Other',
  };
  if (_.has(metric, app)) {
    return metric[app];
  }
  else {
    return 'Other';
  }
};

BaseAdapter.prototype._resolveItemNames = function(item) {
  var name = item.name;
  var key = item.key_;
  var result = name.match(/\$(\d+)/);
  if (!result) {
    return name.replace(/\s/g, '\\ ');
  }
  var macros_num = result[1];
  var params = key.slice(key.indexOf('[') + 1, key.indexOf(']'));
  var splitParams = params.split(',');
  name = name.replace(/\$(\d+)/, splitParams[macros_num - 1]).replace(/\s/g, '\\ ');
  return name;
};

module.exports = BaseAdapter;