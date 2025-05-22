"use client";
import ip from "ip";
import { FormEvent, useState } from "react";

export default function IpCalculator({lang="en"}) {
  const [ipv4, setIpv4] = useState("10.0.0.1");
  const [subnet, setSubnet] = useState(24);
  const [address, setAddress] = useState(ip.cidrSubnet("10.0.0.1/24"));
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Allow empty input
    if (inputValue === "") {
      setIpv4(inputValue);
      return;
    }
    // Prevent input if it's not a valid IPv4 character
    if (!isValidIPv4Character(inputValue.slice(-1))) {
      return;
    }
    setIpv4(inputValue);
  };

  const isValidIPv4Character = (char) => {
    // Only allow digits, periods (.), and slashes (/) in the input
    return /^[0-9.]$/.test(char);
  };

  const handleChange2 = (e) => {
    const inputValue = e.target.value;
    if (inputValue >= 33 || inputValue < 0) {
      return;
    }
    setSubnet(inputValue);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ipaddress = e.currentTarget[0].value;
    const subnetmask = e.currentTarget[1].value;
    console.log(ipaddress, subnetmask);
    setAddress(ip.cidrSubnet(ipaddress + "/" + subnetmask));
  };
  if (lang === "en"){
  return (
    <div>
      <form className="flex flex-col gap-3 mt-7" onSubmit={handleSubmit}>
        <div className="flex justify-center mr-14">
          <input
            className="bg-transparent border-hue border-solid border-1 pl-2 min-w-14 w-fit max-w-[10.5rem] shadow-hue text-xl shadow-md drop-shadow-xl text-white rounded-lg"
            type="text"
            minLength={7}
            maxLength={15}
            size={15}
            onChange={handleChange}
            value={ipv4}
            pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
            required
            tabIndex={1}
          />
          <span className="text-xl mx-2 text-hue">/</span>
          <input
            type="number"
            value={subnet}
            required
            onChange={handleChange2}
            tabIndex={2}
            className="bg-transparent border-hue border-solid border-1 pl-2 w-12 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none shadow-hue text-xl shadow-md drop-shadow-xl text-white rounded-lg"
          />
        </div>
        <input
          className="bg-hue text-white rounded-lg shadow-hue shadow-md drop-shadow-xl px-4 py-2 cursor-pointer border border-transparent hover:border-hue active:shadow-none active:drop-shadow-none"
          type="submit"
          value="Calculate"
        />
      </form>
      <table className="w-fit mt-10 mx-auto">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
          <tr className="mt-24">
            <td className="pr-24">Network Address</td>
            <td className="text-right">{address.networkAddress}</td>
          </tr>
          <tr>
            <td className="pr-24">Subnet mask</td>
            <td className="text-right">{address.subnetMask}</td>
          </tr>
          <tr>
            <td>First-last address</td>
            <td className="text-right">
              {address.firstAddress} - {address.lastAddress}
            </td>
          </tr>
          <tr>
            <td>Broadcast address</td>
            <td className="text-right">{address.broadcastAddress}</td>
          </tr>
          <tr>
            <td>Length</td>
            <td className="text-right">{address.length}</td>
          </tr>
          <tr>
            <td>Number of hosts</td>
            <td className="text-right">{address.numHosts}</td>
          </tr>
          <tr>
            <td>Public Address</td>
            <td className="text-right">
              {ip.isPublic(address.networkAddress) ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td>Private Address</td>
            <td className="text-right">
              {ip.isPrivate(address.networkAddress) ? "Yes" : "No"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );}
  else if (lang === "hu"){
    return (
      <div>
      <form className="flex flex-col gap-3 mt-7" onSubmit={handleSubmit}>
        <div className="flex justify-center mr-14">
          <input
            className="bg-transparent border-hue border-solid border-1 pl-2 min-w-14 w-fit max-w-[10.5rem] shadow-hue text-xl shadow-md drop-shadow-xl text-white rounded-lg"
            type="text"
            minLength={7}
            maxLength={15}
            size={15}
            onChange={handleChange}
            value={ipv4}
            pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
            required
            tabIndex={1}
          />
          <span className="text-xl mx-2 text-hue">/</span>
          <input
            type="number"
            value={subnet}
            required
            onChange={handleChange2}
            tabIndex={2}
            className="bg-transparent border-hue border-solid border-1 pl-2 w-12 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none shadow-hue text-xl shadow-md drop-shadow-xl text-white rounded-lg"
          />
        </div>
        <input
          className="bg-hue text-white rounded-lg shadow-hue shadow-md drop-shadow-xl px-4 py-2 cursor-pointer border border-transparent hover:border-hue active:shadow-none active:drop-shadow-none"
          type="submit"
          value="Számolás"
        />
      </form>
      <table className="w-fit mt-10 mx-auto">
        <tbody>
          <tr>
            <th>Név</th>
            <th>Érték</th>
          </tr>
          <tr className="mt-24">
            <td className="pr-24">Hálózati cím</td>
            <td className="text-right">{address.networkAddress}</td>
          </tr>
          <tr>
            <td className="pr-24">Alhálózati maszk</td>
            <td className="text-right">{address.subnetMask}</td>
          </tr>
          <tr>
            <td>Első/Utolsó cím</td>
            <td className="text-right">
              {address.firstAddress} - {address.lastAddress}
            </td>
          </tr>
          <tr>
            <td>Szórási cím</td>
            <td className="text-right">{address.broadcastAddress}</td>
          </tr>
          <tr>
            <td>Méret</td>
            <td className="text-right">{address.length}</td>
          </tr>
          <tr>
            <td>Eszközök száma</td>
            <td className="text-right">{address.numHosts}</td>
          </tr>
          <tr>
            <td>Publikus cím</td>
            <td className="text-right">
              {ip.isPublic(address.networkAddress) ? "Igen" : "Nem"}
            </td>
          </tr>
          <tr>
            <td>Privát cím</td>
            <td className="text-right">
              {ip.isPrivate(address.networkAddress) ? "Igen" : "Nem"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}
