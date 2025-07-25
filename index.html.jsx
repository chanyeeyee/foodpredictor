import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FoodCostPredictor = () => {
  const [income, setIncome] = useState(0);
  const [familySize, setFamilySize] = useState(0);
  const [prediction, setPrediction] = useState(null);

  const calculateFoodCost = () => {
    // Linear regression model: Food Cost = -1.118 + 0.148 * Income + 0.793 * Family Size
    const foodCost = -1.118 + 0.14821173 * parseFloat(income) + 0.79310548 * parseFloat(familySize);
    setPrediction(foodCost.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-4 grid gap-4">
      <Card>
        <CardContent className="grid gap-4">
          <h1 className="text-xl font-bold">Food Cost Predictor</h1>
          <Input
            type="number"
            placeholder="Enter Income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Enter Family Size"
            value={familySize}
            onChange={(e) => setFamilySize(e.target.value)}
          />
          <Button onClick={calculateFoodCost}>Predict Food Cost</Button>
          {prediction !== null && (
            <div className="text-lg font-semibold">Predicted Food Cost: ${prediction}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodCostPredictor;
