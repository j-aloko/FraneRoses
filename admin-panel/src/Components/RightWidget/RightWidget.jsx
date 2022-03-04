import React from "react";
import "./RightWidget.css";

function RightWidget() {
  const Button = ({ type }) => {
    return <button className={"status " + type}>{type}</button>;
  };
  return (
    <div className="rightWidget">
      <h3 className="title">Latest Transactions</h3>
      <table className="tableContainer">
        <tr className="headerWrapper">
          <th className="th">Customer</th>
          <th className="th">Date</th>
          <th className="th">Amount</th>
          <th className="th">Status</th>
        </tr>
        <tr className="dataWrapper">
          <td className="user">
            <img
              src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/239010802_2268619123272208_5192183763001864507_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeEllOw66HL25A-BfC-6qHSwztvF6W8c76LO28XpbxzvovStCok20-AlH_t4WlH68xuoW9FY3Wup_k5bRpllVwP5&_nc_ohc=Z1keEdNFGggAX9_-QN8&_nc_ht=scontent.facc5-1.fna&oh=318f4c4a1516a48986eec36f5fd0175b&oe=61A7976A"
              alt=""
              className="image"
            />
            <span className="username">Joey Tsino</span>
          </td>
          <td className="date">06 Nov 2021</td>
          <td className="amount">$150.00</td>
          <td className="status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="dataWrapper">
          <td className="user">
            <img
              src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/239010802_2268619123272208_5192183763001864507_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeEllOw66HL25A-BfC-6qHSwztvF6W8c76LO28XpbxzvovStCok20-AlH_t4WlH68xuoW9FY3Wup_k5bRpllVwP5&_nc_ohc=Z1keEdNFGggAX9_-QN8&_nc_ht=scontent.facc5-1.fna&oh=318f4c4a1516a48986eec36f5fd0175b&oe=61A7976A"
              alt=""
              className="image"
            />
            <span className="username">Joey Tsino</span>
          </td>
          <td className="date">06 Nov 2021</td>
          <td className="amount">$150.00</td>
          <td className="status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="dataWrapper">
          <td className="user">
            <img
              src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/239010802_2268619123272208_5192183763001864507_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeEllOw66HL25A-BfC-6qHSwztvF6W8c76LO28XpbxzvovStCok20-AlH_t4WlH68xuoW9FY3Wup_k5bRpllVwP5&_nc_ohc=Z1keEdNFGggAX9_-QN8&_nc_ht=scontent.facc5-1.fna&oh=318f4c4a1516a48986eec36f5fd0175b&oe=61A7976A"
              alt=""
              className="image"
            />
            <span className="username">Joey Tsino</span>
          </td>
          <td className="date">06 Nov 2021</td>
          <td className="amount">$150.00</td>
          <td className="status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="dataWrapper">
          <td className="user">
            <img
              src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/239010802_2268619123272208_5192183763001864507_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeEllOw66HL25A-BfC-6qHSwztvF6W8c76LO28XpbxzvovStCok20-AlH_t4WlH68xuoW9FY3Wup_k5bRpllVwP5&_nc_ohc=Z1keEdNFGggAX9_-QN8&_nc_ht=scontent.facc5-1.fna&oh=318f4c4a1516a48986eec36f5fd0175b&oe=61A7976A"
              alt=""
              className="image"
            />
            <span className="username">Joey Tsino</span>
          </td>
          <td className="date">06 Nov 2021</td>
          <td className="amount">$150.00</td>
          <td className="status">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RightWidget;
