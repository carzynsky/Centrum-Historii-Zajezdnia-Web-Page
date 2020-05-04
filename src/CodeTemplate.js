const text= "import dht\n" + 
"import machine\n" +
"import ujson\n" +
"import time\n" +
"import network\n" +
"import socket\n" +
"\n" +
"machine.RTC().datetime((FORMAT_DATY))\n" +
"\n" +
"with open('logs.txt', 'a') as logs:\n" + 
    "\tlogs.write('Start ' + str(time.localtime()) + \'\\n')\n" +
"\n" +
"sta = network.WLAN(network.STA_IF)\n" +
"sta.active(True)\n" +
"sta.ifconfig(('IP', 'MASKA', 'GATEWAY', 'DNS'))\n" +
"sta.connect('NAZWA SIECI', 'HASŁO')\n" +
"time.sleep(5)\n" +
"\n" +
"with open('logs.txt', 'a') as logs:\n" +
    "\twhile not sta.isconnected():\n" +
        "\t\tlogs.write('Not connected' + str(time.localtime()) + ' ' + str(sta.ifconfig()) + \'\\n')\n" +
        "\t\ttime.sleep(10)\n" +
        "\t\tta.connect('NAZWA SIECI', 'HASŁO')\n" +
    "\tlogs.write('Connected' + str(time.localtime()) + ' ' + str(sta.ifconfig()) + \'\\n')\n" +
"\n"+
"addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]\n" +
"s = socket.socket()\n" +
"s.bind(addr)\n" +
"s.listen(1)\n" +
"\n" +
"data= {}\n" +
"data['name'] = 'NAZWA'\n" + 
"d = dht.DHT22(machine.Pin(16))\n" +
"\n" +
"last_measure = time.time()\n" +
"measured = False\n" +
"while not measured:\n" +
    "\ttry:\n" +
        "\t\td.measure()\n" +
        "\t\tdata['temperature'] = d.temperature()\n" +
        "\t\tdata['humidity'] = d.humidity()\n" +
        "\t\tlast_measure = time.time()\n" +
        "measured = True\n" +
    "\texcept Exception as e:\n" +
        "\t\twith open('logs.txt', 'a') as logs:\n" +
            "\t\t\tlogs.write('Start measure error' + str(time.localtime()) + \'\\n')\n" +
"\n" +
"while True:\n" +
    "\tcl, addr = s.accept()\n" +
    "\tcl_file = cl.makefile('rwb', 0)\n" +
    "\twhile True:\n" +
        "\t\tline = cl_file.readline()\n" +
        "\t\tif not line or line == b'\\r\\n':\n" +
            "\t\t\tbreak\n" +
    "\twith open('logs.txt', 'a') as file:\n" +
        "\t\tfile.write('Connection from ' + str(addr) + \'\\n')\n" +
    "\tif time.time() - last_measure > 120:\n" +
        "\t\ttry:\n" +
            "\t\t\td.measure()\n" +
            "\t\t\tdata['temperature'] = d.temperature()\n" +
            "\t\t\tdata['humidity'] = d.humidity()\n" +
            "\t\t\tlast_measure = time.time()\n" +
            "\t\t\tcl.send('HTTP/1.1 200 OK\\r\\nContent-type: application/json\\r\\n\\r\\n')\n" +
            "\t\t\tcl.send(ujson.dumps(data))\n" +
        "\t\texcept Exception as e:\n" +
            "\t\t\twith open('logs.txt', 'a') as logs:\n" +
                "\t\t\t\tlogs.write('Start mesure error' + str(time.localtime()) + \'\\n')\n" +
            "\t\t\tcl.send('HTTP/1.1 500 Internal Server Error\\r\\nContent-type: application/json\\r\\n\\r\\n')\n" +
            "\t\t\tcl.send(ujson.dumps({'Error': 'Measure Error', 'Time': str(time.localtime())}))\n" +
    "\telse :\n" +
        "\t\tcl.send('HTTP/1.1 200 OK\\r\\nContent-type: application/json\\r\\n\\r\\n')\n" +
        "\t\tcl.send(ujson.dumps(data))\n" +
    "\tcl.close()\n" ;

export default text;