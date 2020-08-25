import psutil
from tabulate import tabulate


class network_detail(object):
    def __init__(self):
        self.parser = psutil.net_if_addrs()

    def __repr__(self):
        self.interfaces = []
        self.address_ip = []
        self.netmask_ip = []
        self.broadcast_ip = []
        for interface_name, interface_address in self.parser.items():
            self.interfaces.append(interface_name)
            for address in interface_address:
                if str(address.family) == 'AddressFamily.AF_INET':
                    self.address_ip.append(address.address)
                    self.netmask_ip.append(address.netmask)
                    self.broadcast_ip.append(address.broadcast)

        data = {"Interfaces": [*self.interfaces],
                "IP Address": [*self.address_ip],
                "Netmask": [*self.netmask_ip],
                "Broadcast: IP": [*self.netmask_ip]
                }
        return tabulate(data, headers="keys", tablefmt="github")


if __name__ == "__main__":
    print(network_detail())
