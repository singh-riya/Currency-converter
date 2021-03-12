import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { Grid } from "@material-ui/core";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  return (
    <Grid container>
      <Grid>
        {/* <input type='number' value={amount} onChange={onChangeAmount} /> */}
        <TextField
          id='standard-basic'
          label='Standard'
          type='number'
          value={amount}
          onChange={onChangeAmount}
        />
        {/* <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select> */}
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selectedCurrency}
          onChange={onChangeCurrency}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}
