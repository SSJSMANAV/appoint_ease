import { Text, View } from "react-native";
import { BASE_URL, tokenContainer } from "../../actions/action-creators/config";
import { useEffect, useState } from "react";

const MyPackages = () => {
  const [packages, setPackages] = useState([]);
  const fetchPackages = async () => {
    try {
      const url = `${BASE_URL}/package/find-package-user`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${tokenContainer.token}`,
        },
      });
      const jsonData = await response.json();
      console.log(jsonData);
      if (response.ok) {
        setPackages(jsonData.result);
      } else {
        console.log("Error:", jsonData.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);
  return (
    <View>
      <Text> my packages</Text>
      {packages.length !== 0 && (
        <View className="flex flex-col">
          {packages.map((pack) => {
            return (
              <View>
                <Text>{pack.packageName}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default MyPackages;
