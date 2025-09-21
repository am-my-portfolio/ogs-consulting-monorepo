import { Auth0EmployeeRoles, Auth0PureOnlyRoles, UserLevel } from '@am-ogs/types';
import { snakeCaseKeys } from './utils';

describe('Utils', () => {
  describe('snakeCaseKeys', () => {
    describe('applicable cases', () => {
      it('should convert keys for an object type', () => {
        const object_one = {
          keyOne: new Date(),
          KeyTwo: 100,
          key_three: 'valueThree',
          keyFour: {
            keyFive: 'valueFive',
            KeySix: new Date(),
            key_seven: 777.7,
          },
        };
        const result = snakeCaseKeys<object>(object_one);
        expect(Object.keys(result).length).toBe(4);
        expect(Object.keys(result)[0]).toBe('key_one');
        expect(Object.values(result)[3]).toHaveProperty('key_five');
        expect(Object.keys(Object.values(result)[3])[1]).toBe('key_six');
      });

      it('should convert keys for an array of object type', () => {
        const object_array_one = [
          {
            ArrayOne: ['valueOne'],
            arrayTwo: [
              { keyFive: 'valueFive' },
              { KeySix: new Date() },
              { key_seven: 'valueSeven' },
            ],
          },
        ];
        const result = snakeCaseKeys<object[]>(object_array_one);
        const nested_object_key = Object.values(result[0])[1][0];

        expect(Object.keys(result[0]).length).toBe(2);
        expect(Object.keys(result[0])[0]).toBe('array_one');
        expect(Object.keys(result[0])[1]).toBe('array_two');
        expect(Object.values(result[0])[1].length).toBe(3);
        expect(nested_object_key).toHaveProperty('key_five');
        expect(Object.keys(nested_object_key)[0]).toBe('key_five');
      });

      it('should convert keys with numbers in them correctly (without putting the extra _ before numbers', () => {
        const roles = [
          Auth0EmployeeRoles.ACCT_USER,
          Auth0PureOnlyRoles.SUPER_ADMIN,
        ];
        const object_with_alpha_numeric_key = {
          user_level: UserLevel.CORPORATE,
          person_id: '29bd75d8-e27e-4c61-acee-d3ee30945148',
          auth0_org_id: 'org_16Y5H3ZkH8N0Z0Xl',
          roles,
          is_default: true,
        };

        const result = snakeCaseKeys<object>(object_with_alpha_numeric_key);
        expect(Object.keys(result).length).toBe(5);
        expect(result).toHaveProperty('auth0_org_id');
      });
    });

    describe('not applicable cases', () => {
      it('should not convert variable name of primitive type', () => {
        const variable_one = 'string';
        const result = snakeCaseKeys<string>(variable_one);

        expect(result).toEqual(variable_one);
        expect(typeof result).toEqual('string');
        expect(Object.keys({ variableOne: variable_one })[0]).toBe(
          'variableOne',
        );
      });

      it('should not process array of primitive type', () => {
        const array_one = ['string'];
        const result = snakeCaseKeys<string[]>(array_one);

        expect(result).toEqual(array_one);
        expect(Array.isArray(result)).toBeTruthy();
        expect(Object.keys({ arrayOne: array_one })[0]).toBe('arrayOne');
      });
    });
  });
});
